const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  str=str.split('')
  let stroka='';
  let key=str[0];
  let count=1;
  for(let i=1;i<=str.length;i++)
  {    console.log(key)
    if(key===str[i]){
    count++;
  }
  else{
    if(count === 1){ stroka += key }
    else
    {stroka +=  count + key;}
      key=str[i]; 
      count=1;
      console.log(stroka)
    }  
  }
  
return stroka;
}
console.log(encodeLine('aaaatttt'))
module.exports = {
  encodeLine
};
