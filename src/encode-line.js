const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let quantity = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      quantity++;
    } else {
      if (quantity > 1) {
        result += `${quantity}${str[i]}`;
      } else {
        result += `${str[i]}`;
      }
      quantity = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
