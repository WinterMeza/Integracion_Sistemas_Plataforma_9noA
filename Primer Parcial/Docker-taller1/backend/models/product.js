const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    code_erp: {type:Number, required: true},
    tipo_item: {type:String, required:true},
    tipo_envase: {type:String, required:true},
    liquido_coberturas: {type:String, required:true},
    unidades_cajas:{type:Number, required:true},
    especie: {type:String, required:true},
    peso_neto: {type:Number, required:true},
    peso_drenado:{type:Number,required:true},
    deleted: { type: Boolean, default: false },
    stock: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
