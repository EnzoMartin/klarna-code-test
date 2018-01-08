// Write our own operator functions to avoid usage of eval, could also use method overloading to be fancy
const operations = {
  '*': (a, b) => { return a * b; },
  '+': (a, b) => { return a + b; },
  '-': (a, b) => { return a - b; },
  '/': (a, b) => { return a / b; }
};
const validOps = Object.keys(operations);

/**
 * Attempts to calculate the mathematical expression passed in
 * @param {String} expression
 * @returns {Number|String}
 */
function calculate(expression) {
  let result = 0;

  if (expression && typeof expression === 'string') {
    let hasOps = false;
    const expressions = expression.split(' ').map((item) => {
      const num = parseFloat(item);

      if (isNaN(num)) {
        hasOps = true;
        return item;
      }
      return num;
      
    });

    if (hasOps) {
      result = expressions.reduce((operationQueue, char, index) => {
        if (typeof char === 'number') {
          operationQueue.push(char);
        } else {
          // Encountered an operation, pop the last 2 inserted numbers in reverse and perform operation
          const b = operationQueue.pop();
          const a = operationQueue.pop();
          // Push result back into the queue for the next potential operation
          operationQueue.push(operations[char](a, b));
        }

        return operationQueue;
      }, [])[0];
    } else {
      result = expressions.pop();
    }
  } else {
    result = expression || 0;
  }

  return result;
}

module.exports = calculate;
