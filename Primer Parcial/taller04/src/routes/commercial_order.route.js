const express = require("express");
const router = express.Router();
const commercialOrderController = require("../controllers/commercial_order.controller");

router.post("/", commercialOrderController.createCommercialOrder);

router.get("/", commercialOrderController.getCommercialOrder);

module.exports = router;
