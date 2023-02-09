const express = require("express");

const {
    validateProductSchema
} = require("../middlewares/product.middlewares");

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
.post(validateProductSchema, createProduct);

productRouter.route("/:id")
.get(getProductFromId)
.delete(deleteProduct)
.patch(patchProduct);


module.exports = { productRouter };