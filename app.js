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

// Ruta raíz
app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});
// Rutas HTTP
app.get("/api/users", getUsers);
app.get("/api/users/:id", getUser);
app.post("/api/users", createUser);
app.put("/api/users/:id", updateUser);
app.delete("/api/users/:id", deleteUser);

// Manejo de errores
app.use(errorHandler);

export default app;
