const validateProductSchema = (req, res, next) => {
    const validKeys = ["id", "title", "category", "imagePath", "price"];
    const { body } = req;
    const isSchemaValid = validKeys.every((key) => Object.keys(body).includes(key));
    if(!isSchemaValid){
        return res.status(422).json();
    }
    next();
}

module.exports = {
    validateProductSchema
};