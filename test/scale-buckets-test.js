const assert = require('assert');
const scaleBuckets = require('../index.js');

describe('scaleBuckets', function () {

  it('should return a function', function () {
    assert.equal(typeof scaleBuckets, 'function');
  });

});
