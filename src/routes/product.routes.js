const express = require("express");

const {
    getProducts,
    getProductFromId,
    createProduct,
    deleteProduct,
    patchProduct
} = require("../controllers/product.controllers");

const productRouter = express.Router();

productRouter.route("")
.get(getProducts)
.post(createProduct);

productRouter.route("/:id")
.get(getProductFromId)
.delete(deleteProduct)
.patch(patchProduct);


module.exports = { productRouter };