const Client = require("../models/cliente.model");

const getClients = async (req, res) => {
  const clients = await Client.aggregate([
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
        foreignField: "client",
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
          name_client: "$name_client",
          direction: "$direction",
          phone: "$phone",
          id_city: "$id_city",
          id_client_type: "$id_client_type",
          ci_client: "$ci_client",
        },
      },
    },
    {
      $project: {
        _id: "$_id._id",
        name_client: "$_id.name_client",
        direction: "$_id.direction",
        phone: "$_id.phone",
        id_city: "$_id.id_city",
        id_client_type: "$_id.id_client_type",
        ci_client: "$_id.ci_client",
      },
    },
  ]);
  res.status(200).json({ ok: true, clients, count: clients.length });
};

const createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();

    newClient
      .save()
      .then((client) => {
        console.log({ client });
        res.status(201).json({ ok: true, client });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .json({ ok: false, message: "Error al guardar el cliente" });
      });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
};

module.exports = {
  getClients,
  createClient,
};
