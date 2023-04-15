const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount( s1, s2 ) {
let mas1=s1.split('');
let mas2=s2.split('');
let count=0;
mas1.forEach((el)=>{
  if (mas2.includes(el)){
    mas2.splice(mas2.indexOf(el),1);
    count++;
  }
})
return count;
//s1.length-Array.from( intersection).length;
}
console.log(getCommonCharacterCount('abca', 'xyzbac'));
module.exports = {
  getCommonCharacterCount
};
