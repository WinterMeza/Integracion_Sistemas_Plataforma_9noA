const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name_client: { type: String },
    direction: { type: String },
    phone: { type: Number },
    id_city: { type: String },
    id_client_type: { type: mongoose.Types.ObjectId },
    ci_client: { type: mongoose.Types.ObjectId },
  },
  { timestamps: true }
);

const client = mongoose.model("client", clientSchema);

module.exports = client;
