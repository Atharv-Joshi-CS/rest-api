const Products = require("../../data/products.json");
const { Product } = require("../models/product.models")
const { findIndexofProduct } = require("../utilities/utility_functions");

const getProducts = (req, res) => {
    res.status(200).json({ data : [...Products]});
}

const getProductFromId = (req, res) => {
    const { id } = req.params;
    const product = Products.find((product) => product.id === id);
    if(product){
        res.status(200).json(
            product
        );
    }else{
        res.status(404).json();
    }
}

const createProduct = (req, res) => {
    const product = new Product(req.body);
    Products.push(product);
    res.status(200).send(product);
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const productIndex = findIndexofProduct(id);
    if(productIndex == -1){
        res.status(404).json();
    }else{
        Products.splice(productIndex,1);
        res.status(200).json();
    }
}

const patchProduct = (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const index = findIndexofProduct(id)

    if (index == -1) {
        res.status(404).json();
    } else {
      const searchKeys = Object.keys(data)
      const criticalFields = ['id']
      for (let i = 0; i < searchKeys.length; i++) {
        if (criticalFields.includes(searchKeys[i])) {
          continue;
        }
        Products[index][searchKeys[i]] = data[searchKeys[i]]
      }
      res.status(200).json(Products[index]);
    }
}

module.exports = {
    getProducts,
    getProductFromId,
    createProduct,
    deleteProduct,
    patchProduct
};