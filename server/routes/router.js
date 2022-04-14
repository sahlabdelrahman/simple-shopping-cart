const router = require("express").Router();

const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.post("/", async (req, res) => {
  const newProduct = await new Product(req.body);
  const savedProduct = newProduct.save();
  res.send(savedProduct);
});

router.delete("/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
