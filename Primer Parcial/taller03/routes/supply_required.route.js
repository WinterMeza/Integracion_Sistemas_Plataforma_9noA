const express = require("express");
const router = express.Router();
const supplyRequiredController = require("../controllers/supply_required.controller");

router.post("/", supplyRequiredController.createSupplyRequired);

router.get("/", supplyRequiredController.getSupplyRequired);

module.exports = router;
