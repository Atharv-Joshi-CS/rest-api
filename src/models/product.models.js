function Product(data){
    this.id = data.id;
    this.title = data.title;
    this.category = data.category;
    this.imagePath = data.imagePath;
    this.price = data.price;
}

module.exports = {Product};