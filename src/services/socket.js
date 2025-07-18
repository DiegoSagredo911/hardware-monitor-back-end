const { Server } = require("socket.io");
const config = require("../config/config");

let io = null;

// Inicializa el servidor de Socket.io
function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: config.allowedOrigins, // Orígenes permitidos por CORS
      methods: ["GET", "POST"], // Métodos permitidos
      credentials: true, // Permitir credenciales
    },
  });

  // Evento cuando un usuario se conecta
  io.on("connection", (socket) => {
    console.log("a user connected");

    // Evento para unirse a un canal
    socket.on("joinChannel", (channelName) => {
      socket.join(channelName);
      console.log(`User joined channel: ${channelName}`);
    });

    // Evento para recibir y reenviar reportes de hardware
    socket.on("hardwareReport", ({ channelName, message }) => {
      io.to(channelName).emit("channelMessage", message);
    });

    // Evento cuando un usuario se desconecta
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return io;
}

// Obtiene la instancia de Socket.io
function getIO() {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
}

module.exports = { initSocket, getIO };
