module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    return new Promise((resolve, reject) => {
      hook.app.service('order-lines').find()
      .then(sales => {
        if (hook.result) {
          if (hook.result.data) {
            hook.result.data[0].dailySales = sales.length || 0;
          }
          else {
            hook.result.dailySales = sales.length || 0;
          }
        }

        resolve(hook);
      })
      .catch(error => reject(error));
    });
  };
};
