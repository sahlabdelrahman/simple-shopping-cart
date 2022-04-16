const router = require("express").Router();

const Order = require("../models/order.model");

router.get("/", async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});

router.post("/", async (req, res) => {
  const newOrder = await new Order(req.body).save();
  res.send(newOrder);
});

router.delete("/:id", async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
