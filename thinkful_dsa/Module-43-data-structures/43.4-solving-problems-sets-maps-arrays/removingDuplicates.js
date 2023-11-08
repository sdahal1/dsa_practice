// Problem 1: Removing Duplicates
// Write a function that takes an array of objects and a key as input, and returns a new array that contains only the unique objects based on the value of the specified key.
// javascript
function removeDuplicates(arr=[], key){
  const map = new Map();
  return arr.filter(obj=>{
    if(!map.has(obj[key])){
      map.set(obj[key], 1)
      return true;
    }
    return false;
  })
}

// Example usage:
const people = [
  { name: 'Alice', age: 23 },
  { name: 'Bob', age: 23 },
  { name: 'Charlie', age: 25 },
  { name: 'Dave', age: 25 },
  { name: 'Eve', age: 23 },
];

console.log(removeDuplicates(people, 'age'));
console.log(removeDuplicates(people, 'name'));

// Output: [
//   { name: 'Alice', age: 23 },
//   { name: 'Charlie', age: 25 },
// ]