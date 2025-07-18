const {
  getHardwareReports,
  getHardwareReportById,
  deleteHardwareData,
} = require("../repository/hardware"); // Importa funciones del repositorio de hardware

// Controlador para obtener todos los reportes de hardware
const getAll = async (req, res) => {
  try {
    const result = await getHardwareReports(); // Obtiene todos los reportes
    res.status(200).json(result); // Responde con los reportes en formato JSON
  } catch (error) {
    console.error("Error fetching reports:", error); // Muestra error en consola
    return res.status(500).json({ error: "Internal server error" }); // Responde con error 500
  }
};

// Controlador para obtener un reporte por su ID
const getById = async (req, res) => {
  const { _id } = req.params; // Obtiene el ID de los parámetros de la solicitud
  try {
    const result = await getHardwareReportById(_id); // Busca el reporte por ID
    res.status(200).json(result); // Responde con el reporte encontrado
  } catch (error) {
    console.error("Error fetching report:", error); // Muestra error en consola
    return res.status(500).json({ error: "Internal server error" }); // Responde con error 500
  }
};

// Controlador para eliminar un reporte por su ID
const deleteById = async (req, res) => {
  const { _id } = req.params; // Obtiene el ID de los parámetros de la solicitud
  try {
    await deleteHardwareData(_id); // Elimina el reporte por ID
    res.status(200).json({ message: "Reporte eliminado correctamente" }); // Responde con mensaje de éxito
  } catch (error) {
    console.error("Error deleting report:", error); // Muestra error en consola
    return res.status(500).json({ error: "Internal server error" }); // Responde con error 500
  }
};

module.exports = {
  getAll,
  getById,
  deleteById,
}; // Exporta los controladores
