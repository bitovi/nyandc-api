const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const inventory = new mongooseClient.Schema({
    store: {
      type: Schema.Types.ObjectId,
      ref: 'store',
      index: true
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      index: true
    },
    available: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('inventory', inventory);
};
