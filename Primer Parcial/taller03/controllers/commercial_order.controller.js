const CommercialOrder = require("../models/commercial_order.model");

const getCommercialOrder = async (req, res) => {
  const commercialOrder = await CommercialOrder.aggregate([
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
          proforma: "$proforma",
          contract_number: "$contract_number",
          id_client: "$id_client",
          id_destiny: "$id_destiny",
          id_brand: "$id_brand",
          id_kind: "$id_kind",
          id_type_container: "$id_type_container",
          id_lid: "$id_lid",
          id_liquid_hedging: "$id_liquid_hedging",
          id_cardboard: "$id_cardboard",
          container_box: "$container_box",
          date: "$date",
          date_entry: "$date_entry",
          observations: "$observations",
        },
      },
    },
    {
      $project: {
        _id: "$_id._id",
        proforma: "$_id.proforma",
        contract_number: "$_id.contract_number",
        id_client: "$_id.id_client",
        id_destiny: "$_id.id_destiny",
        id_brand: "$_id.id_brand",
        id_kind: "$_id.id_kind",
        id_type_container: "$_id.id_type_container",
        id_lid: "$_id.id_lid",
        id_liquid_hedging: "$_id.id_liquid_hedging",
        id_cardboard: "$_id.id_cardboard",
        container_box: "$_id.container_box",
        date: "$_id.date",
        date_entry: "$_id.date_entry",
        observations: "$_id.observations",
      },
    },
  ]);
  res
    .status(200)
    .json({
      ok: true,
      commercialOrder,
      count: commercialOrder.length,
    });
};

const createCommercialOrder = (req, res) => {
  try {
    const newCommercialOrder = new CommercialOrder(req.body);

    newCommercialOrder
      .save()
      .then((commercialOrder) => {
        console.log({ commercialOrder });
        res.status(201).json({ ok: true, commercialOrder });
      })
      .catch((err) => console.log(err));
  } catch (error){
    res.status(400).json({ ok: false, message: error.message });
  }
};

module.exports = {
  getCommercialOrder,
  createCommercialOrder,
};
