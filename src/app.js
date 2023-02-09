const express = require("express");
const dotenv = require("dotenv");
const { productRouter } = require("./routes/product.routes")

dotenv.config();

const app = express();

app.use(express.json());

app.use("/products", productRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is up on PORT : ${process.env.PORT}`);
});