const mongoose = require("mongoose");

const supplyRequiredSchema = mongoose.Schema(
  {
    register_date: { type: Date },
    requirement_date: { type: Date },
    commercial_order: { type: mongoose.Types.ObjectId },
    id_supply: { type: mongoose.Types.ObjectId },
    stock: { type: Number },
    required_stock: { type: Number },
    difference: { type: Number },
    incoming_date: { type: Date },
    state: { type: String },
    observation: { type: String },
  },
  { timestamps: true }
);

const supplyRequired = mongoose.model("supplyRequired", supplyRequiredSchema);

module.exports = supplyRequired;
