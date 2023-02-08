const Products = require("../../data/products.json");

function findIndexofProduct(id){
    const index = Products.findIndex(product => product.id === id)
    return index;
  }

  module.exports = { findIndexofProduct };