const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class DepthCalculator {
  calculateDepth(arr){
   let count=1;
    for(let i=0; i<arr.length; i++){
        while(Array.isArray(arr[i])){   
         count++;    
         arr=arr.flat();        
      }
    }
    return count;
  }
}


module.exports = {
  DepthCalculator
};


