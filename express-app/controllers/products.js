const products = [];

const getAddProduct = (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add Product Page',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

const getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    docTitle: 'Shop Page',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

module.exports = { getAddProduct, postAddProduct, getProducts };
