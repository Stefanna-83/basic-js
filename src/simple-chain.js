const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: [],

  getLength() {
   return this.str.length;
  },

  addLink(value) {
    if (value === 'undefined') this.str.push('( )~~');
    else this.str.push(value+'~~');
return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position-1>this.str.length)
    throw new Error('You can\'t remove incorrect link!')
    else {this.str.splice(position-1, 1); 
    return this;
  } 
  },

  reverseChain() {
    return this.str.reverse();
  },

  finishChain() {
   return this.str.join('')
  }
};

module.exports = {
  chainMaker
};
