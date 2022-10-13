const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  let rez = [];
  if (Array.isArray(names)) {
for (let name of names) {
  if (typeof name === 'string') {
    let i = 0;
     if(name[i] === ' ') 
     while (name[i] === ' ') {
         i++
     }
   rez.push(name[i].toUpperCase());
 }
}
return rez.sort().join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
