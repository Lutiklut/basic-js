const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {
 // console.log(Object.getOwnPropertyNames(data))
  if (date === '' || date === null || date == undefined)  { return 'Unable to determine the time of year!'}
  else if (Object.prototype.toString.call(date) !== '[object Date]'){ throw new Error('Invalid date!')}
  else if  ( !date instanceof Date){throw new Error('Invalid date!');}
  else if  (Object.getOwnPropertyNames(date).length>0){throw new Error('Invalid date!');}
  else if  ( [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11].includes(date.getMonth()))
  {let month = date.getMonth();
      if (month >= 2 && month < 5){return 'spring'}
      else if (month >= 5 && month < 8){return 'summer'}
      else if (month >= 8 && month < 11){return'fall'}
      else if (month === 1 || month === 11 || month === 0){return 'winter'}
      else {throw new Error('Invalid date!');} }
}


module.exports = {
  getSeason
};
