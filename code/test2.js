/**
 * Return the ordinal of the provided positive number
 * @param {Number} num
 * @returns {String}
 */
function numberToOrdinal(num) {
  let result = String(num);
  const tens = num % 10;
  const hundreds = num % 100;

  if (num !== 0) {
    if (tens === 1 && hundreds !== 11) {
      result += 'st';
    } else if (tens === 2 && hundreds !== 12) {
      result += 'nd';
    } else if (tens === 3 && hundreds !== 13) {
      result += 'rd';
    } else {
      result += 'th';
    }
  }

  return result;
}

module.exports = numberToOrdinal;
