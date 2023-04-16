const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {

let emal=email.split('').splice(email.lastIndexOf('@')+1).join('');

return emal
}
console.log(getEmailDomain('someaddress@yandex.ru'));

module.exports = {
  getEmailDomain
};
