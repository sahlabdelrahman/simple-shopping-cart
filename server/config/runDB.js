const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/simple-shopping-cart";

function runDB() {
  mongoose
    .connect(process.env.MONGODB_URI || connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("connected");
    });
}

module.exports = runDB;
