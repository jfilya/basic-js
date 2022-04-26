const { NotImplementedError } = require("../extensions/index.js");

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
  const arr = n.toString().split(""); //делаем массив элементов из числа
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let number = `${arr.slice(0, i).join("")}${arr.slice(i + 1).join("")}`;// arr.slice(0, i)-берем из массива элементы начиная с 0, заканчивая индексом i, arr.slice(i + 1)-берем элемент из массива начиная с индекса i, делаем взятый элемент массива строкой-.join() и получаем строку с цифрами
    let numb = +number;//переводим строку в число
    if (numb > result) {
      result = numb;
    }
  }
  return result;
}

module.exports = {
  deleteDigit,
};
