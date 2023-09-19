require("dotenv").config();
const express = require("express");
const dbConnect = require("./db");
const cors = require("cors");
const productRouter = require("./routes/product.route");
const clientRouter = require("./routes/client.route");
const supplyRequiredRouter = require("./routes/supply_required.route");
const commercialOrderDetailRouter = require("./routes/commercial_order_detail.route");
const commercialOrderRouter = require("./routes/commercial_order.route");

const app = express();

dbConnect();

app.use(cors({ origin: true }));

app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/supply-required", supplyRequiredRouter);
app.use("/api/v1/commercial-order-detail", commercialOrderDetailRouter);
app.use("/api/v1/commercial-order", commercialOrderRouter);
module.exports = app

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto, ${PORT}`);
});

//app.use(express.static(path.join(__dirname, "public")));

//const PORT = process.env.PORT;
