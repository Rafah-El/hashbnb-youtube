import { Router } from "express";
import UserRoutes from '../domains/users/routes.js'
import PlaceRoutes from "../domains/places/routes.js";

const router = Router();

app.use("/users", UserRoutes);
app.use("/places", PlaceRoutes);

export default router; 