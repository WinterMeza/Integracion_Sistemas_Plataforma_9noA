const express = require("express");
const router = express.Router();
const commercialOrderDetailController = require("../controllers/commercial_order_detail.controllers");

router.post("/", commercialOrderDetailController.createCommercialOrderDetail);

router.get("/", commercialOrderDetailController.getCommercialOrderDetail);

module.exports = router;
