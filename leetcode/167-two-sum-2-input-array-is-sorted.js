/* 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while(i<j){
    let left = numbers[i];
    let right = numbers[j];
    let sum = left+right;
    if(sum === target){
      return [i+1, j+1]
    }else if(sum < target){
      i++
    }else{
      j--
    }
  }
  
};

function twoSum2(arr=[], num=0){
  let [left, right] = [0,arr.length-1];
  while(left < right){
    if(arr[left] + arr[right] === num){
      return [left, right]
    }else if(arr[left] + arr[right] > num){
      right--
    }else{
      left++
    }
  }

}

console.log(twoSum2([2,7,11,15],26))
console.log(twoSum2([2,3,5,7,11,15,18,],12))


/* 
[2,7,11,15]
 i
         j
*/