import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import bcrypt from "bcryptjs";
import UserRoutes from './domains/users/routes.js'

const app = express();
const { PORT } = process.env;
const bcryptSalt = bcrypt.genSaltSync();

app.use(express.json());
app.use("/users", UserRoutes);
// Conectar ao MongoDB UMA VEZ, antes das rotas
connectDb();
  
app.listen(PORT, () => {
  console.log(`🚀 Servidor está rodando na porta ${PORT}`);
});