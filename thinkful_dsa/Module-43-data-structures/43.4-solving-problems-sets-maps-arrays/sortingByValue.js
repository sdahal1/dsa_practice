function sortByValueDescending(map) {
  // TODO: Implement the sortByValue function
  // return new Map(Array.from(map).sort((a,b)=>b[1]-a[1]))
  return new Map([...map].sort((a,b)=>b[1]-a[1]))
}


// Example usage:
const numbers = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
])

console.log(sortByValueDescending(numbers));
// Output: Map {
//   'four' => 4,
//   'three' => 3,
//   'two' => 2,
//   'one' => 1
// }