const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * 
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  domains= domains.map(el=> el.split('.').reverse());
  let countObj={};
   for(let i=0;i<domains.length;i++){
    let str='';
    for(let j=0;j<domains[i].length;j++) {
      str+='.'+domains[i][j]
      if (!countObj[str]){countObj[str]=1}
      else {countObj[str]++ }
    }    
  }

  return countObj;
}
domains = [
 'code.yandex.ru',
'music.yandex.ru',
 'yandex.ru'
 ]
console.log(getDNSStats(domains))
module.exports = {
  getDNSStats
};
