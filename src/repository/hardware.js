const HardwareReport = require("../model/HardwareReport");
const { getIO } = require("../services/socket");

const saveHardwareData = async (data) => {
  try {
    const report = new HardwareReport(data);
    await report.save();
    console.log("Reporte de hardware guardado en MongoDB"); // Mensaje de éxito al guardar

    getIO().to(data.computerName).emit("hardwareReport", data); // Emitir reporte por socket
  } catch (error) {
    console.error("Error al guardar en MongoDB:", error); // Error al guardar
    throw new Error("Error al guardar el reporte de hardware"); // Lanzar error
  }
};

const getHardwareReports = async () => {
  try {
    const reports = await await HardwareReport.aggregate([
      {
        $group: {
          _id: "$computerName", // Agrupar por nombre de computadora
          reports: {
            $push: {
              _id: "$_id",
              timestamp: "$timestamp",
              hardware: "$hardware",
            },
          },
        },
      },
    ]);
    return reports; // Retornar reportes agrupados
  } catch (error) {
    console.error("Error al obtener reportes de hardware:", error); // Error al obtener reportes
    throw new Error("Error al obtener reportes de hardware"); // Lanzar error
  }
};

const getHardwareReportById = async (_id) => {
  try {
    console.log("Obteniendo reporte de hardware por ID:", _id); // Mensaje de búsqueda

    let report = await HardwareReport.findOne({ computerName: _id }); // Buscar por nombre de computadora
    if (!report || report.length === 0) {
      throw new Error("Reporte no encontrado"); // Lanzar error si no existe
    }
    // Si se espera un único reporte, se puede retornar el primer elemento
    report = await HardwareReport.aggregate([
      {
        $match: { computerName: _id }, // Filtrar por nombre de computadora
      },
      {
        $group: {
          _id: "$computerName",
          reports: {
            $push: {
              _id: "$_id",
              timestamp: "$timestamp",
              hardware: "$hardware",
            },
          },
        },
      },
    ]);
    if (!report || report.length === 0) {
      throw new Error("Reporte no encontrado"); // Lanzar error si no existe
    }
    report = report[0]; // Tomar el primer elemento del resultado

    return report; // Retornar reporte
  } catch (error) {
    console.error("Error al obtener el reporte de hardware:", error); // Error al obtener reporte
    throw new Error("Error al obtener el reporte de hardware"); // Lanzar error
  }
};

const deleteHardwareData = async (_id) => {
  try {
    await HardwareReport.findByIdAndDelete(_id); // Eliminar reporte por ID
    console.log("Reporte de hardware eliminado"); // Mensaje de éxito al eliminar
  } catch (error) {
    console.error("Error al eliminar el reporte de hardware:", error); // Error al eliminar
    throw new Error("Error al eliminar el reporte de hardware"); // Lanzar error
  }
};

module.exports = {
  saveHardwareData,
  getHardwareReports,
  getHardwareReportById,
  deleteHardwareData,
};
