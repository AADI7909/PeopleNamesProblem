const getFirstNames = list => {
  return list.map(eachPerson => eachPerson.firstName)
}
const peopleNames = require('../country/state/city/index.js')
console.log(getFirstNames(peopleNames))
module.exports = getFirstNames
