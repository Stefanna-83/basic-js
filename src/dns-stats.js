const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = [];
  domains.forEach(item => {
arr_small = item.split('.').reverse()
console.log(arr_small)
  arr.push(arr_small.find(el => el[0]));
 
   if (arr_small.length > 2) {
    arr.push(arr_small.slice(0,2).join('.'));
       console.log(arr)
   }
  
   if (!arr.includes(arr_small.join('.'))) {
    arr.push(arr_small.join('.'));}
 })
 arr = arr.map(item => '.' + item)
 let new_arr = [...new Set(arr)]
 let result = {};
 
 for (let item of new_arr) {
     result[item] = arr.filter(el=> el===item).length;
 }
 
    console.log(result)
 return result
}

module.exports = {
  getDNSStats
};
