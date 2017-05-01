const _clone = require('lodash/clone');
const _omit = require('lodash/omit');
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const { query = {} } = hook.params;

    if (query.$near) {
      hook.params.originalQuery = _clone(hook.params.query);

      hook.params.query = Object.assign(_omit(hook.params.query, '$near'), {
        $limit: hook.params.query.$limit || 1,
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [
                parseFloat(query.$near.lon),
                parseFloat(query.$near.lat)
              ]
            }
          }
        }
      });
    }

    return Promise.resolve(hook);
  };
};
