const assert = require('assert');
const findStores = require('../../src/hooks/find-stores');

describe('\'find-stores\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {
      params: {}
    };
    // Initialize our hook with no options
    const hook = findStores();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
