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

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart Page',
    path: '/cart',
  });
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

module.exports = { getIndex, getProducts, getCart, getCheckout, getOrders };
