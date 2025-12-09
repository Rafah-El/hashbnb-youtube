import { Router } from "express"; 
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY, NODE_ENV } = process.env;

// Função auxiliar para criar e enviar cookie + userObj
function sendTokenAndUser(res, userObj) {
  const token = jwt.sign(userObj, JWT_SECRET_KEY);

  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: NODE_ENV === "production" ? "none" : "lax",
      secure: NODE_ENV === "production", // true apenas em produção com HTTPS
    })
    .json(userObj);
}

// GET /users - listar todos os usuários
router.get("/", async (req, res) => {
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ message: "Erro ao listar usuários" });
  }
});

// GET /users/profile - retorna apenas o usuário logado
router.get("/profile", async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Não autenticado" });
    }

    const decoded = await jwt.verify(token, JWT_SECRET_KEY);

    const userDoc = await User.findById(decoded._id, { password: 0 });
    if (!userDoc) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(userDoc);
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    res.status(500).json({ message: "Erro ao buscar perfil" });
  }
});

// POST /users - criar usuário
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const { _id } = newUserDoc;
    const newUserObj = { name, email, _id };

    sendTokenAndUser(res, newUserObj);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

    if (error.code === 11000) {
      return res.status(400).json({ message: "E-mail já cadastrado!" });
    }

    res.status(500).json({ message: "Erro ao criar usuário" });
    throw error;
  }
});

// POST /users/login - login de usuário
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (!userDoc) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
    if (!passwordCorrect) {
      return res.status(400).json({ message: "Senha inválida!" });
    }

    const { name, _id } = userDoc;
    const newUserObj = { name, email, _id };

    sendTokenAndUser(res, newUserObj);
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro no login" });
  }
});

router.post("/logout", (req, res) => {
   res.clearCookie("token").json("Deslogado com sucesso!");
});

export default router;
