const appendDailySales = require('../../hooks/append-daily-sales');
const { authenticate } = require('feathers-authentication').hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [ appendDailySales() ],
    get: [ appendDailySales() ],
    create: [],
    update: [],
    patch: [ appendDailySales() ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
