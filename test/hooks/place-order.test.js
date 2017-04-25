const assert = require('assert');
const placeOrder = require('../../src/hooks/place-order');

describe('\'place-order\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {
      params: {}
    };
    // Initialize our hook with no options
    const hook = placeOrder();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
