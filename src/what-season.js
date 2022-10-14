const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  console.log(typeof date);  
  console.log(date.valueOf());  
  
     
if (!date) return ('Unable to determine the time of year!');
 if (typeof date !== 'object' || Date.parse(date) === NaN || date.getMilliseconds() === 0) {
     console.log('Invalid date!'); throw new Error('Invalid date!');}
 if ((date.getMonth() >= 0 && date.getMonth() < 2) || date.getMonth() === 11) {
     console.log(date.getMonth())
     console.log('winter'); 
     return 'winter';
     
 }
 if (date.getMonth() > 1 && date.getMonth() < 5) {
     console.log(date.getMonth())
     console.log('spring'); return 'spring';}
 if (date.getMonth() > 4 && date.getMonth() < 8){
     console.log(date.getMonth())
     console.log('summer');  return 'summer';}
 if (date.getMonth() > 7 && date.getMonth() < 11) {
     console.log(date.getMonth())
     console.log('autumn'); return 'autumn';}
}

module.exports = {
  getSeason
};
