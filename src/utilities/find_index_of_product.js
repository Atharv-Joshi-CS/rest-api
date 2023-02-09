function findIndexofProduct(id, Products){
    const index = Products.findIndex(product => product.id === id)
    return index;
  }

  module.exports = { findIndexofProduct };