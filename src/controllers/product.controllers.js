const { Product } = require("../models/product.models");
const { findIndexofProduct } = require("../utilities/find_index_of_product");
const { sendResponse, sendErrorResponse } = require("../utilities/custom_responses");
const { AppError } = require("../models/app_error.models");
const {readJSONFile, writeJSONFile} = require("../utilities/file_operation_functions");

const getProducts = (req, res) => {
    readJSONFile(process.env.FILEPATH)
    .then(
        (jsonData) => {
            sendResponse(req, res, {statusCode : 200, payload : [...jsonData]});
        }
    )
    .catch(
        (error) => {
            sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
        }
    );
}

const getProductFromId = (req, res) => {
    const { id } = req.params;
    readJSONFile(process.env.FILEPATH)
    .then((jsonData) => {
        const Products = jsonData;
        const product = Products.find((product) => product.id === id);
        if(product){
            sendResponse(req, res, {statusCode : 200, payload : product});
        }else{
            sendErrorResponse(
                new AppError({statusCode : 404, payload : {"message" : "Product not found."}}),
                req, res);
        }
    })
    .catch(
        (error) => {
            sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
        }
    );
}

const createProduct = (req, res) => {
    readJSONFile(process.env.FILEPATH)
    .then((jsonData) => {
        const Products = jsonData;
        const product = new Product(req.body);
        Products.push(product);
        writeJSONFile({filePath : process.env.FILEPATH, jsonData : Products})
        .then((_) => {
            sendResponse(req, res, {statusCode : 200, payload : product});
        })
        .catch(
            (error) => {    
                sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
            }
        );    
    })
    .catch(
        (error) => {
            sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
        }
    );
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    readJSONFile(process.env.FILEPATH)
    .then((jsonData) => {
        const Products = jsonData;
        const productIndex = findIndexofProduct(id, Products);
        if(productIndex == -1){
            sendErrorResponse(
                new AppError({statusCode : 404, payload : {"message" : "Product not found."}}),
                req, res);
        }else{
            Products.splice(productIndex,1);
            writeJSONFile({filePath : process.env.FILEPATH, jsonData : Products})
            .then((_) => {
                sendResponse(req, res, {statusCode : 200, payload : {"message" : "Object Deleted Successfully"}});
            })
            .catch(
                (error) => {    
                    sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
                }
            );   
        }
    })
    .catch(
        (error) => {
            sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
        }
    );
}

const patchProduct = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    readJSONFile(process.env.FILEPATH)
    .then((jsonData) => {
        const Products = jsonData;
        const index = findIndexofProduct(id, Products);
        if (index == -1) {
            sendErrorResponse(
                new AppError({statusCode : 404, payload : {"message" : "Product not found."}}),
                req, res);
        } else {
          const searchKeys = Object.keys(data)
          const criticalFields = ['id']
          for (let i = 0; i < searchKeys.length; i++) {
            if (criticalFields.includes(searchKeys[i])) {
              continue;
            }
            Products[index][searchKeys[i]] = data[searchKeys[i]]
          }
          writeJSONFile({filePath : process.env.FILEPATH, jsonData : Products})
          .then((_) => {
            sendResponse(req, res, {statusCode : 200, payload : Products[index]});
          })
          .catch(
              (error) => {
                  sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
              }
          );
        }
    })
    .catch(
        (error) => {
            sendErrorResponse(new AppError({statusCode : 500, payload : error}), req, res);
        }
    );
}

module.exports = {
    getProducts,
    getProductFromId,
    createProduct,
    deleteProduct,
    patchProduct
};