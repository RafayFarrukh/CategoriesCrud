const mongoose = require("mongoose");
const CategoriesSchema = mongoose.Schema(
  {
    name: String,

    description: String,
    image: String,
  },
  { timestamps: true }
);
const Categories = mongoose.model("Product", CategoriesSchema);
module.exports = Categories;
