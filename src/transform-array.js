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
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  
  let result = [];
  arr.forEach((item, i = 0) => {

   if (item === '--discard-prev') {
      if (item[i - 1]) result.pop();
    }

    else if (item === '--double-next') {
      if (item[i + 1]) result.push(item[i + 1]);
    }

    else if (item === '--double-prev') {
      if (item[i - 1]) result.push(item[i - 1]);
    } 
    
    else if (item !== '--discard-next' ) {
      result.push(item[i]);
      if (item[i-1] === '--discard-next')
      result.pop();
      }
    }
    )
  return result;
}



module.exports = {
  transform
};
