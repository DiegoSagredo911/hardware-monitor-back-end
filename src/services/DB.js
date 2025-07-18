const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.connect(config.mongodb.uri);

mongoose.connection.on("connected", () => {
  console.log("Conectado a MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error de conexión a MongoDB:", err);
});

module.exports = mongoose;
