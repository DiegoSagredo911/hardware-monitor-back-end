const mqtt = require("mqtt");
const config = require("../config/config");
const { saveHardwareData } = require("../repository/hardware");

// Conecta al broker MQTT usando la configuración
const mqttClient = mqtt.connect(config.mqtt.host, {
  port: config.mqtt.port,
});

// Evento al conectar exitosamente al broker
mqttClient.on("connect", () => {
  console.log("Conectado al broker MQTT");
  mqttClient.subscribe("hardware/status"); // Se suscribe al tópico 'hardware/status'
});

// Evento en caso de error de conexión
mqttClient.on("error", (err) => {
  console.error("No se pudo conectar al broker MQTT:", err.message);
  mqttClient.end(); // Finaliza la conexión en caso de error
});

// Evento al recibir un mensaje en un tópico suscrito
mqttClient.on("message", async (topic, message) => {
  if (topic === "hardware/status") {
    try {
      const data = JSON.parse(message.toString()); // Parsea el mensaje recibido
      await saveHardwareData(data); // Guarda los datos de hardware en la base de datos
    } catch (error) {
      console.error("Error al parsear:", error);
    }
  }
});
