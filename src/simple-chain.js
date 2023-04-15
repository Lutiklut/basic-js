const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  obj: [],
  getLength() {
    return this.obj.length
  },
  addLink( value ) {
    this.obj.push(`( ${value} )`);
   return this;
  },
  removeLink( position ) {
  if(this.obj[position-1]===undefined){
    this.obj=[];
    throw new Error("You can't remove incorrect link!");
  }
  this.obj.splice(position-1,1)
  return this;
  },
  reverseChain() {
    this.obj.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    chain=this.obj.join('~~');
    this.obj=[];
    return chain;
  }
};

module.exports = {
  chainMaker
};
