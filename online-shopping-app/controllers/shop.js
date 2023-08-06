const Cart = require('../models/cart');
const Product = require('../models/product');

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      docTitle: 'Home Page',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'Shop Page',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

const getProduct = (req, res, next) => {
  const { productID } = req.params;
  Product.findById(productID, (product) => {
    res.render('shop/product-detail', {
      product,
      path: '/products',
      docTitle: product.title,
    });
  });
};

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart Page',
    path: '/cart',
  });
};

const postCart = (req, res, next) => {
  const { productID } = req.body;
  Product.findById(productID, (product) => {
    Cart.addProduct(productID, product.price);
  });
  res.redirect('/products');
};

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    docTitle: 'Checkout Page',
    path: '/checkout',
  });
};

const getOrders = (req, res, next) => {
  res.render('shop/orders', {
    docTitle: 'Orders Page',
    path: '/orders',
  });
};

module.exports = {
  getIndex,
  getProducts,
  getProduct,
  getCart,
  postCart,
  getCheckout,
  getOrders,
};
