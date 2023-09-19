const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String},
    code_erp: { type: Number},
    tipo_item: { type: String},
    tipo_envase: { type: String},
    liquido_coberturas: { type: String},
    unidades_cajas: { type: Number},
    especie: { type: String},
    peso_neto: { type: Number},
    peso_drenado: { type: Number},
    deleted: { type: Boolean, default: false },
    stock: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
