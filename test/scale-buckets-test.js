const assert = require('assert');
const scaleBuckets = require('../index.js');

describe('scaleBuckets', function () {

  before(function () {
    this.values = ['a', 'b', 'c', 'd', 'e'];
    this.scale = scaleBuckets(this.values, 1, 10);
  });

  it('should be a function', function () {
    assert.equal(typeof scaleBuckets, 'function');
  });

  it('should return a function', function () {
    assert.equal(typeof this.scale, 'function');
  });

  it('should return a value from the array supplied', function () {
    assert.notStrictEqual(this.values.indexOf(this.scale(5), -1));
  });

  it('should return the first value if its in the first bucket', function () {
    assert.strictEqual(this.scale(1), 'a');
    assert.strictEqual(this.scale(2), 'a');
  });

  it('should return the second value if its in the second bucket', function () {
    assert.strictEqual(this.scale(3), 'b');
    assert.strictEqual(this.scale(4), 'b');
  });

  it('should return the third value if its in the third bucket', function () {
    assert.strictEqual(this.scale(5), 'c');
    assert.strictEqual(this.scale(6), 'c');
  });

  it('should return the fourth value if its in the fourth bucket', function () {
    assert.strictEqual(this.scale(7), 'd');
    assert.strictEqual(this.scale(8), 'd');
  });

  it('should return the fifth value if its in the fifth bucket', function () {
    assert.strictEqual(this.scale(9), 'e');
    assert.strictEqual(this.scale(10), 'e');
  });

  it('should throw an error if the input is out of range', function () {
    assert.throws(function () { this.scale(0)}.bind(this), /range/);
    assert.throws(function () { this.scale(11)}.bind(this), /range/);
  });

});
