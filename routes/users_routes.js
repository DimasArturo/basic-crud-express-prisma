import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./controllers/users_controller.js";

import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

// GET: Obtener todos los usuarios
app.get("/api/users", getUsers);
// GET: Obtener un usuario
app.get("/api/users/:id", getUser);
// POST: Crear un usuario
app.post("/api/users", createUser);
// PUT: Actualizar un usuario
app.put("/api/users/:id", updateUser);
// DELETE: Eliminar un usuario
app.delete("/api/users/:id", deleteUser);

app.use(errorHandler);

export default app;
