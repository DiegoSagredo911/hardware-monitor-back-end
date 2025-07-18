const express = require("express");

const app = express();
const http = require("http");

// Importar rutas
const hardwareRoutes = require("./routes/hardwareRouter");
const config = require("./config/config");
const cors = require("cors");
const { initSocket } = require("./services/socket");

// importar servicio de MQTT
require("./services/mqttService");

// Configurar CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (config.allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

// Configurar rutas
app.use("/api/hardware", hardwareRoutes);

// Importar el servidor HTTP
const server = http.createServer(app);
// Inicializar Socket.io
initSocket(server);

server.listen(config.port, () => {
  console.log(`Servidor API escuchando en http://localhost:${config.port}`);
});
