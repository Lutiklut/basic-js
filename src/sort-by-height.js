const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {

  let masminInd=Object.entries(arr).filter(i => i[1] == "-1").map(i => Number(i[0]))
  let filteredArray = arr.filter((value) => value !== -1);
  filteredArray.sort((a,b)=>a-b);
  for (let i of masminInd){
    
    filteredArray.splice(i,0,-1)
  }
 return filteredArray
}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
module.exports = {
  sortByHeight
};
