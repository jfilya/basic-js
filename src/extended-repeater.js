const { NotImplementedError } = require('../extensions/index.js');

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
    let time,s,a,aRT,aS,addit,add;
    if(options.hasOwnProperty('repeatTimes')){
      time= options.repeatTimes;
    }else{
      time= 1;
    } 
    if(options.hasOwnProperty('separator')){
      s=options.separator;
    }else {
      s='+';
    }  
     if(options.hasOwnProperty('addition')){
      a=options.addition;
    }else {
      a='';
    } 
    if(options.hasOwnProperty('additionRepeatTimes')){
      aRT=options.additionRepeatTimes;
    }else {
      aRT='';
    }
    if(options.hasOwnProperty('additionSeparator')){
      aS=options.additionSeparator;
      if(aRT !=''){
        addit=((a+aS).repeat(aRT));
        add=addit.substring(0,addit.length-aS.length)
        } else {
          addit=a+aS
         add=addit.substring(0,addit.length-aS.length)
        }   
    }else{
      aS='|';
      addit=((a+aS).repeat(aRT));
      add=addit.substring(0,addit.length-aS.length)
    }  
  let result=(str+add+s).repeat(time)
  return result.substring(0,result.length-s.length)
  }

module.exports = {
  repeater
};
