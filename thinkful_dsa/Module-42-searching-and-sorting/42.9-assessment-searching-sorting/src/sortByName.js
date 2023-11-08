const sort = require("./sort");
// const customers = require("./data.json");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function compareFirstName(left, right){
  if(left.firstName < right.firstName) return -1;
  if(left.firstName > right.firstName) return 1;
  return 0;
}
function compareLastName(left, right){
  if(left.lastName < right.lastName) return -1;
  if(left.lastName > right.lastName) return 1;
  return 0;
}

function sortByName(customers) {
  customers = sort(compareFirstName, customers)
  customers = sort(compareLastName, customers);
  return customers;
}

// const data = [
//   {firstName: "Lucie", lastName: "Dahal"},
//   {firstName: "Rob", lastName: "Dahal"},
//   {firstName: "Burger", lastName: "Angus"},
//   {firstName: "Steve", lastName: "Holmes"},
//   {firstName: "Lebron", lastName: "James"},
//   {firstName: "Kobe", lastName: "Bryant"},
//   {firstName: "Steve", lastName: "Irwin"},
// ]
// console.log(sortByName(data))

module.exports = sortByName;
