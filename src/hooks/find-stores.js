const _omit = require('lodash/omit');
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const { query } = hook.params;

    if (query.lon && query.lat) {
      hook.params.query = Object.assign(_omit(hook.params.query, 'lon', 'lat'), {
        $limit: hook.params.query.$limit || 1,
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [
                parseFloat(query.lon),
                parseFloat(query.lat)
              ]
            }
          }
        }
      });
    }
  };
};
