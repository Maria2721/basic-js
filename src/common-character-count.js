const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  let characters1 = {};
  let characters2 = {};

  for (let char of s1) {
    characters1[char] = characters1[char] ? characters1[char] + 1 : 1;
  }
  for (let char of s2) {
    characters2[char] = characters2[char] ? characters2[char] + 1 : 1;
  }
  Object.keys(characters1).forEach((key) => {
    if (characters2[key]) {
      common += Math.min(characters1[key], characters2[key]);
    }
  });

  return common;
}

module.exports = {
  getCommonCharacterCount,
};
