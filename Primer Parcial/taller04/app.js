require("dotenv").config();
const express = require("express");
const dbConnect = require("./src/db/index");
const cors = require("cors");
const productRouter = require("./src/routes/product.route");
const clientRouter = require("./src/routes/client.route");
const supplyRequiredRouter = require("./src/routes/supply_required.route");
const commercialOrderDetailRouter = require("./src/routes/commercial_order_detail.route");
const commercialOrderRouter = require("./src/routes/commercial_order.route");

const app = express();
const PORT = process.env.PORT;

dbConnect();

app.use(cors({ origin: true }));

app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/supply-required", supplyRequiredRouter);
app.use("/api/v1/commercial-order-detail", commercialOrderDetailRouter);
app.use("/api/v1/commercial-order", commercialOrderRouter);

// Create an HTTP server instance
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto, ${PORT}`);
});

// Export the server instance for testing
module.exports = { app, server };

//app.use(express.static(path.join(__dirname, "public")));

//const PORT = process.env.PORT;
