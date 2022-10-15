const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let new_str = String(str);
  if ('addition' in options) {
if (options.additionRepeatTimes>1) {
       for (let i = 1; i<options.additionRepeatTimes; i++) {
    new_str = new_str+options.addition+(options.additionSeparator || '|')
  }
  new_str = new_str+options.addition;
} else {
 new_str = new_str+options.addition;
 }
}
 let arr = [new_str];
if ('repeatTimes' in options) {
    
if (options.repeatTimes>1) {
      while (arr.length<options.repeatTimes) {arr.push(new_str)};
  for (let i = 1; i<arr.length; i++) {
    arr[i] = (options.separator || '+')+arr[i];}

} }
    
  new_str = arr.join('');
console.log(arr)

console.log(new_str)

return  new_str;

}

module.exports = {
  repeater
};
