const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = [];
  let additionStr = "";

  let addition;
  let separator = "+";
  let additionSeparator = "|";
  let repeatTimes = 1;
  let additionRepeatTimes = 1;

  if (Object.hasOwn(options, "addition")) {
    addition = options.addition;
    if (Object.hasOwn(options, "additionRepeatTimes")) {
      additionRepeatTimes = options.additionRepeatTimes;
    }
    if (Object.hasOwn(options, "additionSeparator")) {
      additionSeparator = options.additionSeparator;
    }
    let additions = Array(additionRepeatTimes).fill(`${addition}`);
    additionStr = additions.join(additionSeparator);
  }
  if (Object.hasOwn(options, "repeatTimes")) {
    repeatTimes = options.repeatTimes;
  }
  if (Object.hasOwn(options, "separator")) {
    separator = options.separator;
  }
  newStr = Array(repeatTimes).fill(str + additionStr);

  return newStr.join(separator);
}

module.exports = {
  repeater,
};
