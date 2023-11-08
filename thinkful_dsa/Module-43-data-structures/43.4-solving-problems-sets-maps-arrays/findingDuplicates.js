/* 
Finding Duplicates: Write a function that takes an array of integers as input and returns a set of all the integers that occur more than once in the array.
*/

function find_duplicates(arr=[]){
  const map = new Map();
  for(let num of arr){
    if(map.get(num) === undefined){
      map.set(num,1);
    }else{
      map.set(num, map.get(num)+1)
    }
  }
  console.log(map.keys())

  const result = []
  for(let [key,value] of map.entries()){
    if(value>1){
      result.push(key)
    }
  }
  return result
}

function find_duplicates2(arr) {
  const result = arr.reduce((acc, curr) => {
    acc.set(curr, acc.has(curr) ? curr : NaN);
    return acc;
  }, new Map())
  return [...result.values()].filter(v => !isNaN(v));
}

const arr = [1, 2, 3, 4, 5, 2, 3, 4]
console.log(find_duplicates2(arr)) // should output: {2, 3, 4}
