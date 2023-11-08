/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email="", customers=[], left = 0, right = customers.length) {
  if(left >= right) return -1;

  const midIdx = Math.floor((left+right)/2);
  const midVal = customers[midIdx];

  if(midVal.email === email){
    console.log('found email for user', midVal)
    return midIdx;
  }

  if(email < midVal.email){
    return searchByEmail(email, customers, left, midIdx)
  }else{
    return searchByEmail(email, customers, midIdx+1)
  }

}


// const data = [
//   { firstName: 'Burger', lastName: 'Angus', email: "a" },
//   { firstName: 'Kobe', lastName: 'Bryant' , email: "b" },
//   { firstName: 'Lucie', lastName: 'Dahal' , email: "c" },
//   { firstName: 'Rob', lastName: 'Dahal' , email: "d" },
//   { firstName: 'Steve', lastName: 'Holmes' , email: "e" },
//   { firstName: 'Steve', lastName: 'Irwin' , email: "f" },
//   { firstName: 'Lebron', lastName: 'James' , email: "g" }
// ]

// console.log(searchByEmail('g', data))

module.exports = searchByEmail;
