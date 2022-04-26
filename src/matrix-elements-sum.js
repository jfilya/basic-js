const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix){
  let sum=0;
  let leng=matrix[0].length;
   let newArray = matrix.flat(1);
  for(let i=0; i<newArray.length; i++){
  if(newArray[i-leng]!=0){
    sum+=newArray[i]
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
