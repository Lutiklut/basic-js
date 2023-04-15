const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr ) {
    if(Array.isArray(arr)){
    var count=0;
    let deep=0;
    for (let j =0; j<arr.length;j++)
    { if (Array.isArray(arr[j])){
           count=Math.max(this.calculateDepth(arr[j]));
           if (count>deep){deep=count}
         
      }}
return deep+1;}
else {return 0;}
  
  }
}

module.exports = {
  DepthCalculator
};
