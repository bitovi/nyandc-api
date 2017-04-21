// stores-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const stores = new mongooseClient.Schema({
    zoomLevel: { type: Number },
    dayHour7: { type: String },
    dayHour6: { type: String },
    dayHour5: { type: String },
    dayHour4: { type: String },
    dayHour3: { type: String },
    dayHour2: { type: String },
    dayHour1: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    postalCode: { type: String },
    City: { type: String },
    Mile: { type: Number },
    StreetAddress: { type: String },
    StoreID: { type: Number, required: true, unique: true },
    State: { type: String },
    PhoneNumber: { type: String },
    suburb: { type: String },
    storeName: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('stores', stores);
};
