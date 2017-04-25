// Initializes the `orderLines` service on path `/order-lines`
const createService = require('feathers-mongoose');
const createModel = require('../../models/order-lines.model');
const hooks = require('./order-lines.hooks');
const filters = require('./order-lines.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'order-lines',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order-lines', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('order-lines');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
