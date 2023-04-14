const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  if (!Array.isArray(arr)||arr===null||arr==undefined){ throw new Error ("\'arr\' parameter must be an instance of the Array!")}
  else if(arr.length===0) {return arr}
  else if(arr.every ((el)=>!isNaN(el))){return arr}
  let newArr= Array.from(arr);
 if ((newArr[0]==='--discard-prev')||(arr[0]==='--double-prev')){newArr= newArr.slice(1)}
 if ((newArr[newArr.length-1]==='--discard-next')||(newArr[newArr.length-1]==='--double-next')){newArr.pop()}
  newArr.map((el, index, arr)=> {
    //if( arr[arr.length-1]==='--discard-next'|| arr[arr.length-1]==='--double-next'){arr.pop() }
    //if( arr[0]==='--discard-prev'||arr[0]==='--double-prev'){arr.shift()}
    if( el==='--discard-next'){arr[index]=arr[index+1]='del' }
    if( el==='--discard-prev'){arr[index]=arr[index-1]='del';} 
    if( el==='--double-next'){arr[index]=arr[index+1]; }
    if( el==='--double-prev'){arr[index]=arr[index-1];}});

    newArr=newArr.filter(function(f) { return f !== 'del' })
    return newArr;
}

module.exports = {
  transform
};
