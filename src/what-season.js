const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  let validDate = Object.getOwnPropertyNames(date).length !== Object.getOwnPropertyNames(new Date()).length;
  if (Object.prototype.toString.call(date) !== "[object Date]" || validDate) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth() + 1;
  return month >= 3 && month <= 5 ? "spring" : month >= 6 && month <= 8 ? "summer" : month >= 9 && month <= 11 ? "autumn" : "winter";
}

module.exports = {
  getSeason
};
