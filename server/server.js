const express = require("express");
const bodyParser = require("body-parser");

const productsRouter = require("./routes/products.route");
const ordersRouter = require("./routes/orders.route");
const runDB = require("./config/runDB");

const app = express();

app.use(bodyParser());

runDB();

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.listen(3002, () => {
  console.log("Server is running");
});
