const get404 = (req, res, next) => {
  res
    .status(404)
    .render('errors/404', { docTitle: 'Page Not Found', path: null });
};

module.exports = { get404 };
