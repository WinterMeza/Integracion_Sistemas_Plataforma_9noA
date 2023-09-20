const mongoose = require("mongoose");

const commercialOrderDetailSchema = mongoose.Schema(
  {
    proforma: { type: String },
    id_product: { type: mongoose.Types.ObjectId, ref: "product" },
    id_tag: { type: mongoose.Types.ObjectId },
    container_number: { type: Number },
    box_number: { type: Number },
    box_amount: { type: Number },
    id_container_size: { type: mongoose.Types.ObjectId },
    id_lid_type: { type: mongoose.Types.ObjectId },
    net_weight: { type: Number },
    drained_weight: { type: Number },
    oil: { type: Number },
    water: { type: Number },
    loins: { type: Number },
    crumbs: { type: Number },
  },
  { timestamps: true }
);

const commercialOrderDetail = mongoose.model(
  "commercialOrderDetail",
  commercialOrderDetailSchema
);

module.exports = commercialOrderDetail;
