const _defaultsDeep = require('lodash/defaultsDeep');
const _get = require('lodash/get');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  // if the query parameters are not included in the response data, then
  // add them so as not to confuse any algebra on the frontend attempting to
  // manage cache results based on the requested set
  return function (hook) {
    if (_get(hook, 'params.originalQuery') && _get(hook, 'result.data')) {
      hook.result.data.forEach(result => {
        _defaultsDeep(result, hook.params.originalQuery);
      });
    }

    return Promise.resolve(hook);
  };
};
