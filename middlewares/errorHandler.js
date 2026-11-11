const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Registro duplicado
  if (err.code === "P2002") {
    return res.status(409).json({
      message: "El registro ya existe",
    });
  }
  // Registro no encontrado
  if (err.code === "P2025") {
    return res.status(404).json({
      message: "Registro no encontrado",
    });
  }
  res.status(500).json({
    message: "Error interno del servidor",
  });
};

export default errorHandler;
