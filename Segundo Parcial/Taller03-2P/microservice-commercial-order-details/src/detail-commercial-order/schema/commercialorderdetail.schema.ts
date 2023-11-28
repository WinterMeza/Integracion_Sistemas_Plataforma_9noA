import * as mongoose from 'mongoose';

export const CommercialOrderSchema = new mongoose.Schema(
    {
        proforma: { type: String, required: true },
        id_product: { type: String, required: true },
        id_tag: { type: String, required: true },
        container_number: { type: Number, required: true },
        box_number: { type: Number, required: true },
        box_amount: { type: Number, required: true },
        id_container_size: { type: String, required: true },
        id_lid_type: { type: String, required: true },
        net_weight: { type: Number, required: true },
        drained_weight: { type: Number, required: true },
        oil: { type: Number, required: true },
        water: { type: Number, required: true },
        loins: { type: Number, required: true },
        crumbs: { type: Number, required: true },
    },
    { timestamps: true },
);