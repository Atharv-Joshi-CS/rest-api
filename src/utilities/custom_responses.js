const sendResponse = (req, res, config) => {
    const {statusCode, payload} = config;

    res.status(statusCode || 200).json(payload);
}

const sendErrorResponse = (error, req, res) => {
    res.status(error.statusCode).json(error.payload);
}


module.exports = { sendResponse, sendErrorResponse };