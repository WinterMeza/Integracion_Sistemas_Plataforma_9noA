const Product = require("../models/product");

const getProducts = async (req, res) => {
  const products = await Product.aggregate([
    {
      $match: { deleted: false },
    },
    {
      $sort: { _id: -1 },
    },
    {
      $limit: 10,
    },
    {
      $lookup: {
        from: "movements",
        localField: "_id",
        foreignField: "product",
        as: "movements",
      },
    },
    {
      $unwind: {
        path: "$movements",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: {
          _id: "$_id",
          name: "$name",
          code_erp: "$code_erp",
          tipo_item: "$tipo_item",
          tipo_envase: "$tipo_envase,",
          liquido_coberturas: "$liquido_coberturas",
          unidades_cajas: "$unidades_cajas",
          especie: "$especie",
          peso_neto: "$peso_neto",
          peso_drenado: "$peso_drenado",
        },
        stock: {
          $sum: "$movements.quantity",
        },
      },
    },
    {
      $project: {
        _id: "$_id._id",
        name: "$_id.name",
        code_erp: "$_id.code_erp",
        tipo_item: "$_id.tipo_item",
        tipo_envase: "$_id.tipo_envase",
        liquido_coberturas: "$_id.liquido_coberturas",
        unidades_cajas: "$_id.unidades_cajas",
        especie: "$_id.especie",
        peso_neto: "$_id.peso_neto",
        peso_drenado: "$_id.peso_drenado",
        stock: 1,
      },
    },
    { $sort: { stock: -1 } },
  ]);
  res.status(200).json({ ok: true, products, count: products.length });
};

const createProduct = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      ok: false,
      message: "El campo nombre del producto es obligatorio",
    });
    return;
  }
  const newProduct = new Product(req.body);

  newProduct
    .save()
    .then((product) => {
      console.log({ product });
      res.status(201).json({ ok: true, product });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getProducts,
  createProduct,
};
