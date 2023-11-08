const mergeSort = require("./42.6.1-mergeSort");

function compare(elemA, elemB){
  console.log("compare", elemA, "to", elemB)
  return elemA - elemB;
}


console.log(mergeSort(compare, [6,4,8,2,3,1,0,9,7]))

