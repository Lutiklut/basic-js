const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n ) {
 let an=Array.from(String(n), Number);
 console.log(an)
 if(an[0]<an[1]){an.shift();}
 else{
 let min = Math.min(...an);
console.log(min);

 let ind = an.indexOf(min);
 
//console.log(n.inde( min))
 //let ind=n.indexOf(min)

an.splice(ind,1)
} 
console.log(Number(an.join('')));
return Number(an.join(''));
}
console.log(deleteDigit(425345768213454646))
module.exports = {
  deleteDigit
};
