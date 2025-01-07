const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let curArr;
    if (i === 0) {
      curArr = arr.slice(1);
    } else {
      curArr = arr.slice(0, i).concat(arr.slice(i + 1));
    }
    result = Math.max(result, Number(curArr.join('')));
  }

  return result;
}

module.exports = {
  deleteDigit
};
