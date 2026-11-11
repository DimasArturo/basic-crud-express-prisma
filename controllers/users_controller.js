import prisma from "../lib/prisma.js";

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// Obtener un usuario
export const getUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  if (!user) {
    return res.status(404).json({
      message: "Usuario no encontrado",
    });
  }
  res.json(user);
};

// Crear usuario
export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      age,
    },
  });
  res.status(201).json(user);
};

// Actualizar usuario
export const updateUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = await prisma.user.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      name,
      email,
      age,
    },
  });
  res.json(user);
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  await prisma.user.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "Usuario eliminado correctamente",
  });
};
