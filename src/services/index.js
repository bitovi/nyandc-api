const stores = require('./stores/stores.service.js');
const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(stores);
  app.configure(users);
  app.configure(products);
};
