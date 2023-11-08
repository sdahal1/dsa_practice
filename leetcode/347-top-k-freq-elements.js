/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]


Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var mostFrequent = function (nums) {
  const map = {};
  for (let num of nums) {
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  let max;
  for (let key in map) {
    if (max === undefined) {
      max = Number(key);
    }
    if (map[key] > map[max]) {
      max = map[key];
    }
  }
  return max;
};

// console.log(
//   mostFrequent([1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6])
// );
var topKFrequent = function (nums, k) {
  //sort the array
  // nums.sort((numA, numB) => numA - numB);
  const map = {};
  for (let num of nums) {
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  const sorted = Object.keys(map).sort((keyA, keyB)=>{
    return map[keyB] - map[keyA]
  })

  return sorted.slice(0,k)
};


console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6],2))
