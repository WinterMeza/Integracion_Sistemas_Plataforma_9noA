const mongoose = require("mongoose");

const dbConnect = (app) => {
  mongoose
    .connect(
      `mongodb+srv://caroline:${process.env.MONGO_DB_PASS}@development.3ttkyle.mongodb.net/productos?retryWrites=true&w=majority`
    )
    .then((result) => {
      const PORT = process.env.PORT;
      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto, ${PORT}`);
      });
      console.log("Conexion exitosa a la BD");
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
