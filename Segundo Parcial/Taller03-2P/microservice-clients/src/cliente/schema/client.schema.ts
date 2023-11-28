import * as mongoose from 'mongoose'

export const ClientSchema = new mongoose.Schema(
    {
        name_client: { type: String, required: true },
        direction: { type: String, required: true },
        phone: { type: Number, required: true },
        id_city: { type: String, required: true },
        id_client_type: { type: String, required: true },
        ci_client: { type: String, required: true },
    },
    {
        timestamps: true
    }
);