const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  for (const domain of domains) {
    let domainArr = domain.split(".").reverse();

    for (let i = 0; i < domainArr.length; i++) {
      let currentDomain = `.${domainArr.slice(0, i + 1).join(".")}`;

      result[currentDomain] = result[currentDomain] ? result[currentDomain] + 1 : 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
