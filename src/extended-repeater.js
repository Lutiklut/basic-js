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
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'*/
function repeater(str, options) {
  let myStr='';let a = options.repeatTimes;

 
  if (typeof(str)==='string'){
 if(!options.separator&&!options.addition&&!options.additionSeparator&&!options.additionRepeatTimes){ 
    return   str.concat('+').repeat(options.repeatTimes).slice(0,-1)
  }}

  str=String(str);
  

  if(!options.addition===null||!options.addition===undefined||!typeof(options.addition)!='string'){options.addition=String(options.addition);}
  if(!typeof(str)!='string'){options.addition=String(options.addition);}
  //console.log(typeof(options.addition))
  if( typeof str === 'string'){ 

    if(!options){return str}
   
    else if(!options.separator&&!options.additionSeparator&&!options.additionRepeatTimes&&options.addition){console.log(5)
        return   str.concat(options.addition).concat('+').repeat(options.repeatTimes).slice(0,-1)
      } 
     
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
    else if(!options.additionSeparator){ 
      return myStr=str.concat((options.addition.concat(("|")).repeat(options.additionRepeatTimes)).slice(0,-1)).concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length)
    }
    else { 
      return myStr=str.concat((options.addition.concat((options.additionSeparator)).repeat(options.additionRepeatTimes)).slice(0,-options.additionSeparator.length)).concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length)
    }}
} 
// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };
  console.log(('la', { repeatTimes: 3 }));//, 'la+la+la');
//console.debug(repeater('single', { repeatTimes: 1 }))//, 'single'))

module.exports = {
  repeater
};
