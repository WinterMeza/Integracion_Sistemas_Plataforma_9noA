const mongoose = require("mongoose");

const commercialOrderSchema = mongoose.Schema({
  proforma: { type: String },
  contract_number: { type: String },
  id_client: { type: mongoose.Types.ObjectId, ref: "Client" },
  id_destiny: { type: mongoose.Types.ObjectId },
  id_brand: { type: mongoose.Types.ObjectId },
  id_kind: { type: mongoose.Types.ObjectId },
  id_type_container: { type: mongoose.Types.ObjectId },
  id_lid: { type: mongoose.Types.ObjectId },
  id_liquid_hedging: { type: mongoose.Types.ObjectId },
  id_cardboard: { type: mongoose.Types.ObjectId },
  container_box: { type: Number },
  date: { type: Date },
  date_entry: { type: Date },
  observations: { type: String },
});

const CommercialOrder = mongoose.model(
  "Commercial_Order",
  commercialOrderSchema
);

module.exports = CommercialOrder;
