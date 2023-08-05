const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'Add Product Page',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'Shop Page',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

module.exports = { getAddProduct, postAddProduct, getProducts };
