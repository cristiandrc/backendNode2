const productsRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');
const port = 3000;

function routerApi(app) {
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);

  app.listen(port, () => {
    console.log('listen en http://localhost:3000');
  });
}

module.exports = routerApi;
