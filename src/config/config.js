// Carga las variables de entorno desde un archivo .env
require("dotenv").config();

// Objeto de configuración principal
const config = {
  // Puerto en el que se ejecutará la aplicación (por defecto 3000)
  port: process.env.PORT || 3000,
  // Configuración para la conexión MQTT
  mqtt: {
    // Host del servidor MQTT (por defecto localhost)
    host: process.env.MQTT_HOST || "mqtt://localhost",
    // Puerto del servidor MQTT (por defecto 1883)
    port: process.env.MQTT_PORT || 1883,
  },
  // Configuración para la conexión a MongoDB
  mongodb: {
    // URI de conexión a la base de datos MongoDB
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/hardwareMonitor",
  },
  // Orígenes permitidos para CORS
  allowedOrigins: process.env.ALLOWEDORIGINS
    ? process.env.ALLOWEDORIGINS.split(",")
    : ["*"], // Por defecto permite todos los orígenes
};

// Exporta el objeto de configuración para usarlo en otras partes de la aplicación
module.exports = config;
