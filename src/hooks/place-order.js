module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    let order = hook.result;
    let linesData = (hook.data && hook.data.lines) || [ ];
    let lines = [ ];

    return Promise.all(linesData.map(line => {
      line.order = order._id;

      // create order line items
      return hook.app.service('order-lines').create(line)
        .then(line => {
          lines.push(line);

          return hook.app.service('inventory').find({
            query: {
              store: line.store,
              product: line.product
            }
          }).then(inventory => {
            const stock = inventory.data[0];

            // update inventory
            return hook.app.service('inventory').patch(stock._id, {
              available: stock.available - line.quantity
            });
          });
        });
    })).then(() => {
      if (hook.result) {
        hook.result.lines = lines;
      }

      return Promise.resolve(hook);
    });
  };
};
