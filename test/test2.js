const numberToOrdinal = require('../code/test2');
const assert = require('chai').assert;

describe('Challenge', () => {
  it('should return 0 when called with 0', () => {
    assert.equal(numberToOrdinal(0), '0');
  });

  it('should return an ending with "st"', () => {
    assert.equal(numberToOrdinal(1), '1st');
    assert.equal(numberToOrdinal(21), '21st');
    assert.equal(numberToOrdinal(31), '31st');
    assert.equal(numberToOrdinal(41), '41st');
    assert.equal(numberToOrdinal(101), '101st');
    assert.equal(numberToOrdinal(201), '201st');
    assert.equal(numberToOrdinal(401), '401st');
    assert.equal(numberToOrdinal(501), '501st');
    assert.equal(numberToOrdinal(1001), '1001st');
    assert.equal(numberToOrdinal(5001), '5001st');
  });

  it('should return an ending with "nd"', () => {
    assert.equal(numberToOrdinal(2), '2nd');
    assert.equal(numberToOrdinal(22), '22nd');
    assert.equal(numberToOrdinal(32), '32nd');
    assert.equal(numberToOrdinal(42), '42nd');
    assert.equal(numberToOrdinal(102), '102nd');
    assert.equal(numberToOrdinal(202), '202nd');
    assert.equal(numberToOrdinal(442), '442nd');
    assert.equal(numberToOrdinal(1002), '1002nd');
    assert.equal(numberToOrdinal(5002), '5002nd');
  });

  it('should return an ending with "rd"', () => {
    assert.equal(numberToOrdinal(3), '3rd');
    assert.equal(numberToOrdinal(33), '33rd');
    assert.equal(numberToOrdinal(53), '53rd');
    assert.equal(numberToOrdinal(73), '73rd');
    assert.equal(numberToOrdinal(103), '103rd');
    assert.equal(numberToOrdinal(233), '233rd');
    assert.equal(numberToOrdinal(733), '733rd');
    assert.equal(numberToOrdinal(1033), '1033rd');
    assert.equal(numberToOrdinal(1633), '1633rd');
  });

  it('should return an ending with "th"', () => {
    assert.equal(numberToOrdinal(4), '4th');
    assert.equal(numberToOrdinal(10), '10th');
    assert.equal(numberToOrdinal(11), '11th');
    assert.equal(numberToOrdinal(12), '12th');
    assert.equal(numberToOrdinal(13), '13th');
    assert.equal(numberToOrdinal(14), '14th');
    assert.equal(numberToOrdinal(100), '100th');
    assert.equal(numberToOrdinal(114), '114th');
    assert.equal(numberToOrdinal(1000), '1000th');
    assert.equal(numberToOrdinal(10000), '10000th');
  });
});

