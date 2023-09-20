const CommercialOrderDetail = require("../models/commercial_order_detail.model");
const { createProductFactory } = require("../utils/products");

const getCommercialOrderDetail = async (req, res) => {
  const commercialOrderdetails = await CommercialOrderDetail.aggregate([
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
          id_product: "$id_product",
          id_tag: "$id_tag",
          container_number: "$container_number,",
          box_number: "$box_number",
          box_amount: "$box_amount",
          id_container_size: "$id_container_size",
          id_lid_type: "$id_lid_type",
          net_weight: "$net_weight",
          drained_weight: "$drained_weight",
          oil: "$oil",
          water: "$water",
          loins: "$loins",
          crumbs: "$crumbs",
        },
      },
    },
    {
      $project: {
        _id: "$_id._id",
        proforma: "$_id.proforma",
        id_product: "$_id.id_product",
        id_tag: "$_id.id_tag",
        container_number: "$_id.container_number",
        box_number: "$_id.box_number",
        box_amount: "$_id.box_amount",
        id_container_size: "$_id.id_container_size",
        id_lid_type: "$_id.id_lid_type",
        net_weight: "$_id.net_weight",
        drained_weight: "$_id.drained_weight",
        oil: "$_id.oil",
        water: "$_id.water",
        loins: "$_id.loins",
        crumbs: "$_id.crumbs",
      },
    },
  ]);
  res
    .status(200)
    .json({
      ok: true,
      commercialOrderdetails,
      count: commercialOrderdetails.length,
    });
};

const createCommercialOrderDetail = (req, res) => {
  try {
    const newCommercialOrderDetail = new CommercialOrderDetail(req.body);

    newCommercialOrderDetail
      .save()
      .then((commercialOrderDetail) => {
        console.log({ commercialOrderDetail });
        res.status(201).json({ ok: true, commercialOrderDetail });
      })
      .catch((err) => console.log(err));
  } catch (error){
    res.status(400).json({ ok: false, message: error.message });
  }
};

module.exports = {
  getCommercialOrderDetail,
  createCommercialOrderDetail,
};
