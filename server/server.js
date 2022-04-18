const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const productsRouter = require("./routes/products.route");
const ordersRouter = require("./routes/orders.route");
const runDB = require("./config/runDB");

const app = express();

app.use(bodyParser());

runDB();

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.send("API Running");
  });
}

const PORT = process.env.PORT;

app.listen(PORT || 3002, () => {
  console.log("Server is running");
});
