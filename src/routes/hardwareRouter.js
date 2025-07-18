const express = require("express");
const router = express.Router();
const hardware = require("../controllers/hardwareController");

router.get("/", hardware.getAll);
router.get("/:_id", hardware.getById);
router.delete("/:_id", hardware.deleteById);

module.exports = router;
