const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./routes/router");

const app = express();

app.use(bodyParser());

const connectionString = "mongodb://localhost/simple-shopping-cart";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected");
  });

app.use("/api/products", router);

app.listen(3002, () => {
  console.log("Server is running");
});
