const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const filePath = path.join(rootDir, 'data', 'cart.json');

class Cart {
  static addProduct(productID, productPrice) {
    // Fetch the previous cart
    fs.readFile(filePath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id === productID
      );
      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;
      // Add new product and increase the quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.quantity += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: productID, quantity: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += productPrice;
      fs.writeFile(filePath, JSON.stringify(cart), (error) => {
        console.log(error);
      });
    });
  }
}

module.exports = Cart;
