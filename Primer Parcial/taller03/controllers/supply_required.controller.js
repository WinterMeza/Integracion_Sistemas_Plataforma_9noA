const SupplyRequired = require("../models/supply_required.model");

const getSupplyRequired = async (req, res) => {
  const products = await SupplyRequired.aggregate([
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
        foreignField: "commercialOrderDetail",
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
          register_date: "$register_date",
          requirement_date: "$requirement_date",
          commercial_order: "$commercial_order",
          id_supply: "$id_supply,",
          stock: "$stock",
          required_stock: "$required_stock",
          difference: "$difference",
          incoming_date: "$incoming_date",
          state: "$state",
          observation: "$observation",
        },
        stock: {
          $sum: "$movements.quantity",
        },
      },
    },
    {
      $project: {
        _id: "$_id._id",
        register_date: "$_id.register_date",
        requirement_date: "$_id.requirement_date",
        commercial_order: "$_id.commercial_order",
        id_supply: "$_id.id_supply",
        stock: "$_id.stock",
        required_stock: "$_id.required_stock",
        difference: "$_id.difference",
        incoming_date: "$_id.incoming_date",
        state: "$_id.state",
        observation: "$_id.observation",
      },
    },
  ]);
  res.status(200).json({ ok: true, products, count: products.length });
};

const createSupplyRequired = (req, res) => {
  try {
    const newSupplyRequired = new SupplyRequired(req.body);

    newSupplyRequired
      .save()
      .then((supplyRequired) => {
        console.log({ supplyRequired });
        res.status(201).json({ ok: true, supplyRequired });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
};

module.exports = {
  getSupplyRequired,
  createSupplyRequired,
};
