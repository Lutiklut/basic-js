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
  let myStr='';
  
  console.log(typeof(str), '1')
  //console.log(str)
  if (typeof(str)==='object'){
   
   console.log(typeof(str))

  }
  
  str=String(str);

  if(!options.addition===null||!options.addition===undefined||!typeof(options.addition)!='string'){options.addition=String(options.addition);}
  console.log(typeof(options.addition))
  if( typeof str === 'string'){
    if(!options){return str}
      else if(!options.separator&&!options.additionSeparator){
        return   str.concat((options.addition.concat(('|')).repeat(options.additionRepeatTimes)).slice(0,-1)).concat('+').repeat(options.repeatTimes).slice(0,-1)
      }

      else if(!options.repeatTimes){
        if(!options.additionRepeatTimes){return myStr=str.concat((options.addition)).concat(options.separator).slice(0,-options.separator.length);
        }
        else{return myStr=str.concat((options.addition.concat((options.additionSeparator)).repeat(options.additionRepeatTimes)).slice(0,-options.additionSeparator.length)).concat('options.separator').slice(0,-options.separator.length);
      }}
    else if(!options.addition){
        if (!options.separator){return myStr=str.concat('+').repeat(options.repeatTimes).slice(0,-1)}
        else { return myStr=str.concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length)}}
    else if(!options.separator){ 
      if(!options.additionSeparator){return myStr=str.concat('+').repeat(options.repeatTimes).slice(0,-1)}
      
      else{console.log(123);return myStr=str.concat((options.addition.concat((options.additionSeparator)).repeat(options.additionRepeatTimes)).slice(0,-options.additionSeparator.length)).concat('+').repeat(options.repeatTimes).slice(0,-1)
    }}
    else if(!options.additionSeparator){ return myStr=str.concat((options.addition.concat(("|")).repeat(options.additionRepeatTimes)).slice(0,-1)).concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length)
    }
    else { 
      return myStr=str.concat((options.addition.concat((options.additionSeparator)).repeat(options.additionRepeatTimes)).slice(0,-options.additionSeparator.length)).concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length)
    }}
} 
  
  console.debug(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 }))
  // 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION');
  // 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');



module.exports = {
  repeater
};
