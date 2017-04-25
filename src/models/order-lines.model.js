const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const orderLines = new mongooseClient.Schema({
    order: {
      type: Schema.Types.ObjectId,
      ref: 'order',
      index: true
    },
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
    quantity: {
      type: Number,
      default: 1
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('orderLines', orderLines);
};
