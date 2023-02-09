const { sendErrorResponse } = require("../utilities/custom_responses");
const { AppError } = require("../models/app_error.models");

const validateProductSchema = (req, res, next) => {
    const validKeys = ["id", "title", "category", "imagePath", "price"];
    const { body } = req;
    const isSchemaValid = validKeys.every((key) => Object.keys(body).includes(key));
    if(!isSchemaValid){
        return sendErrorResponse(
            new AppError({statusCode : 422, payload : {"message" : "Product Schema Invalid"}}, 
            req, res));
    }
    next();
}

module.exports = {
    validateProductSchema
};