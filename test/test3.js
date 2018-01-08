const calculate = require('../code/test3');
const assert = require('chai').assert;

describe('Challenge', function () {
  it('should parse numbers', function () {
    assert.equal(calculate('1 2 3'), 3);
  });
  it('should parse floats', function () {
    assert.equal(calculate('1 2 3.5'), 3.5);
  });
  it('should support addition', function () {
    assert.equal(calculate('1 3 +'), 4);
  });
  it('should support multiplication', function () {
    assert.equal(calculate('1 3 *'), 3);
  });
  it('should support subtraction', function () {
    assert.equal(calculate('1 3 -'), -2);
  });
  it('should support division', function () {
    assert.equal(calculate('4 2 /'), 2);
  });
  it('should return the last value if no operations are provided', () => {
    assert.equal(calculate('4 2 3 7'), 7);
    assert.equal(calculate(7), 7);
  });
  it('should return 0 if no values are provided', () => {
    assert.equal(calculate(), 0);
    assert.equal(calculate(''), 0);
  });

  it('should handle complex expressions', () => {
    assert.equal(calculate('3 2 1 - *'), 3);
    assert.equal(calculate('7 4 5 + * 3 - 10 /'), 6);
  });
});
