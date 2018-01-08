const maskify = require('../code/test1');
const assert = require('chai').assert;

describe('Challenge', () => {
  it('should mask the digits of standard credit cards', () => {
    assert.equal(maskify('5512103073210694'), '5###########0694');
    assert.equal(maskify(5512103073210694), '5###########0694');
  });

  it('should mask the digits of standard credit cards and maintian the hyphens', () => {
    assert.equal(maskify('4556-3646-0793-5616'), '4###-####-####-5616');
  });

  it('should not mask the digits of short credit cards', () => {
    assert.equal(maskify('54321'), '54321');
    assert.equal(maskify(54321), '54321');
  });

  it('should not mask a non-numeric input', () => {
    assert.equal(maskify('Skippy'), 'Skippy');
  });

  it('should ignore empty strings', () => {
    assert.equal(maskify(''), '');
  });

  it('should handle non-string inputs', () => {
    assert.equal(maskify(function () {}), '');
    assert.equal(maskify(), '');
    assert.equal(maskify({}), '');
    assert.equal(maskify(null), '');
  });

  it('should partially mask a mixed numeric and non-numeric input', () => {
    assert.equal(maskify('S2k3i4p65p7y'),'S#k#i#p#5p7y');
  });
});

