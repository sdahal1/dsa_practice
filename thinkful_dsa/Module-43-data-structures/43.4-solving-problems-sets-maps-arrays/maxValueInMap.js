// Write a function that takes a map of integers as input and returns the key that corresponds to the maximum value in the map.


function findMaxValueKey(map=new Map()) {
  
  let maxNum = -Infinity;
  let maxWord = "";
  
 for(let [word,num] of map.entries()){
    if(num>maxNum){
      maxNum = num;
      maxWord = word;
    }
  }
  return maxWord
}

// Example usage:
const numbers = new Map([
  ['who', 1],
  ['dis', 12],
  ['what', 3],
  ['dat', 4],
]);
console.log(numbers);
console.log(findMaxValueKey(numbers)); // Output: 'four'