const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n.toString().split("");
  if ((arr.length === 2)) {
    if (+arr[0] + +arr[1] < 10) {
      n =(+arr[0]) +(+arr[1]);
      return n;
    }
    if (+arr[0] + +arr[1] >= 10) {
      n = (+arr[0]) + (+arr[1]);
      arr = n.toString().split("");
      n = (+arr[0]) + (+arr[1]);
      return n;
    }
  }
  if (arr.length === 3) {
    n = (+arr[0]) + (+arr[1]) + (+arr[2]);
    return n;
  }
}

module.exports = {
  getSumOfDigits,
};
