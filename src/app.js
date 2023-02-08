const express = require("express");
const { productRouter } = require("./routes/product.routes")

const app = express();

app.use(express.json());

app.use("/products", productRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is up on PORT : ${PORT}`);
});