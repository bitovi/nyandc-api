const stores = require('./stores/stores.service.js');
const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const inventory = require('./inventory/inventory.service.js');
const orders = require('./orders/orders.service.js');
const orderLines = require('./order-lines/order-lines.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(stores);
  app.configure(users);
  app.configure(products);
  app.configure(inventory);
  app.configure(orders);
  app.configure(orderLines);
};
