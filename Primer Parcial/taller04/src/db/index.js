const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("Conexion exitosa a la BD");
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
