/* 
closure- when you have a function A that returns another a function B. The use case would be if you need to pass Function A as a callback to another function C. Function C will take the function A as a callback, but the callback will be executed when calling Function C. This way we can provide some data to function A, and function As variables will be in scope for the function B closure to run with the variables from Function A within scope and accessible. 

This can help a situation where we need to pass a function that compares a value to another value. However

*/

const search = require("./binaryIndexOf");

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

function forNumber(target) {
  console.log("running fornumber");
  return (element, index) => {
    console.log(`Compare ${target} to ${element} at index ${index}`);
    if (element === target) {
      return 0;
    }
    if (element < target) {
      return -1;
    }
    if (element > target) {
      return 1;
    }
  };
}


console.log(search(forNumber(18), arr))



