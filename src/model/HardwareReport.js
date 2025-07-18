const mongoose = require("../services/DB");

const HardwareReportSchema = new mongoose.Schema(
  {
    computerName: {
      type: String,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
    unixtimestamp: {
      type: Number,
      required: true,
    },
    Group: {
      type: String,
      required: false,
    },
    hardware: {
      type: Object,
      required: true,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("HardwareReport", HardwareReportSchema);
