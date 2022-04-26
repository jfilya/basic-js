const { NotImplementedError } = require("../extensions/index.js");

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
  let rez=0;
  str1=s1.split('');
  str2=s2.split('');
  for(let i=str1.length-1; i>=0; i--){
    for(let j=0; j<str2.length; j++){
      if(str1[i]===str2[j]){ 
        str1.splice(i,1)
        str2.splice(j,1)
        rez++;
      }
    }
  }
  return rez;
}

module.exports = {
  getCommonCharacterCount,
};
