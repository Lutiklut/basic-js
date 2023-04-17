const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {

  let mass=String( n).split('');

  while(mass.length>1){

    mass =mass.reduce((a, b) => Number(a) + Number(b)).toString().split('');
  }
return Number(mass.join())

}
console.log(getSumOfDigits(99))
module.exports = {
  getSumOfDigits
};
