const Product = require("../models/product.model");

function createProductFactory(data) {
  const requiredFields = [
    "name",
    "code_erp",
    "tipo_item",
    "tipo_envase",
    "liquido_coberturas",
    "unidades_cajas",
    "especie",
    "peso_neto",
    "peso_drenado",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`El campo '${field}' del producto es obligatorio.`);
    }
  }

  // Crear una nueva instancia de producto con los datos proporcionados
  const newProduct = new Product(data);

  return newProduct;
}

module.exports = {
  createProductFactory,
};
