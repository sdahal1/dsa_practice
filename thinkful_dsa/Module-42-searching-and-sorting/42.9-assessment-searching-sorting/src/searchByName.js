/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */

const sortByName = require("./sortByName");

function searchByName(firstName, lastName, elements, left=0, right=elements.length) {
  if(left >= right){
    return -1
  }
  const midIdx = Math.floor((left+right)/2);
  const midCustomer = elements[midIdx];
  if(midCustomer.firstName === firstName && midCustomer.lastName === lastName){
    return midIdx;
  }
  if(midCustomer.lastName > lastName){ //if the middle value is greater than the value we want to find, look at the smaller half
    console.log('if', midCustomer.lastName, lastName)
    return searchByName(firstName, lastName, elements, left, midIdx)
  }else{
    console.log('else', midCustomer.lastName, lastName)
    return searchByName(firstName, lastName, elements, midIdx+1)
  }

}


const data = [
  { firstName: 'Burger', lastName: 'Angus' },
  { firstName: 'Kobe', lastName: 'Bryant' },
  { firstName: 'Lucie', lastName: 'Dahal' },
  { firstName: 'Rob', lastName: 'Dahal' },
  { firstName: 'Steve', lastName: 'Holmes' },
  { firstName: 'Steve', lastName: 'Irwin' },
  // { firstName: 'Lebron', lastName: 'James' }
]

console.log(searchByName("Burger", "Angus", data))

module.exports = searchByName;
