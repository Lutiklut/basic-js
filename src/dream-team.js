const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  if (!(Array.isArray(members))){return false}
  else if (members===null){ return false}
  else if (members===undefined){return false}
  else if (members===false){return false}
  else if (  Number(members) ){return false}


  else{
  let name=members.map((el)=>{
  if (!(typeof (el) === 'string')){false}
  else if (el===null){false}
  else if (el===undefined){false}
  else if (el===false){false}
  else if (!isNaN(el)){false}
  else if (typeof (el) === "object"){false}
  else{
  
  return el.trim().toUpperCase()[0]}
})
    name.sort((a, b) => a.localeCompare(b));
   return name.join('')
  }}
module.exports = {
  createDreamTeam
};
