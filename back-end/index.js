import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import bcrypt from "bcryptjs";
import UserRoutes from './domains/users/routes.js'
import PlaceRoutes from "./domains/places/routes.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
const { PORT } = process.env;
const bcryptSalt = bcrypt.genSaltSync();

app.use(express.json());

app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use("/users", UserRoutes);
app.use("/places", PlaceRoutes);
// Conectar ao MongoDB UMA VEZ, antes das rotas
connectDb();
  
app.listen(PORT, () => {
  console.log(`🚀 Servidor está rodando na porta ${PORT}`);
});