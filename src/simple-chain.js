const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  obj: [],
  getLength() {
    return this.keys(obj).length
  },
  addLink( value ) {
    this.obj.push(value);
   return this;
  },
  removeLink( position ) {
  this.obj[position]
  },
  reverseChain() {
    this.obj.reverse();
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
