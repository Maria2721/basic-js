const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (arr[i + 2]) {
        i += 2;
      } else {
        return resultArr;
      }
    } else if (arr[i] === "--discard-prev") {
      if (resultArr.length) {
        resultArr.pop();
      }
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1]) {
        resultArr.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (resultArr.length) {
        let last = resultArr.pop();
        resultArr.push(last);
        resultArr.push(last);
      }
    } else {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
}

module.exports = {
  transform,
};
