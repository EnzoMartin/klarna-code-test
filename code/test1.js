/**
 * Process the input and return masked string
 * @param {String} creditCard
 * @returns {String}
 */
function processInput(creditCard) {
  let result = '';
  const len = creditCard.length;

  if (len > 5) {
    const first = creditCard.slice(0, 1);
    const lastFour = creditCard.slice(len - 4, len);

    for (let i = 1; i < len - 4; i++) {
      const char = creditCard[i];
      result += isNaN(parseInt(char, 10)) ? char : '#';
    }

    result = `${first}${result}${lastFour}`;
  } else {
    result = creditCard;
  }

  return result;
}

/**
 * Attempt to mask a given input with # characters
 * @param {String|Number} creditCard
 * @returns {String}
 */
function maskify(creditCard) {
  let result;

  switch (typeof creditCard) {
    case 'string':
      result = processInput(creditCard);
      break;
    case 'number':
      result = processInput(String(creditCard));
      break;
    default:
      result = '';
      break;
  }

  return result;
}

module.exports = maskify;
