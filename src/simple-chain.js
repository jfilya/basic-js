const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {//длина цепи в виде числа
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {//добавляет звено, содержащее строковое представление `value` к цепочке
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {//удаляет звено цепи, находящееся в заданном положении;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {// разворачивает цепь задом наперед;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {//завершает цепь и **возвращает** ее
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
