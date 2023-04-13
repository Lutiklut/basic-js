const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
 // let activ=Number( sampleActivity);
  if (  sampleActivity==='' ){return false}
  else if ( isNaN(sampleActivity) ){return false}
  else if (  Number.isInteger(sampleActivity) ){return false}
  else if (  sampleActivity===null ){return false}
  else if (   Number(sampleActivity)<=0 ){return false}
  else if (  Number(sampleActivity)>15){return false}
  else if (  !(typeof (sampleActivity) === 'string')){return false}
  else {
    let t= Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD);
    return Math.ceil(t);
  
  }console.debug(Math.ceil(t))
}

dateSample('one')
dateSample('')
dateSample(' ')
dateSample(' \n\t\r')
module.exports = {
  dateSample
};
