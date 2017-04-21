const stores = require('./stores/stores.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(stores);
};
