/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   if(nums.every(num=>num===0)){
//     return [0,0,0];
//   }
//   const result = []
//   nums.sort((a,b)=>a-b);
//   for(let i = 0; i<nums.length; i++){
//     let left = i+1;
//     let right = nums.length - 1;
//     let difference = 0 - nums[i]
//     while(left < right){
//       if(nums[left]+nums[right] === difference){
//         result.push([nums[i], nums[left], nums[right]])
//         break;
//       }else if(nums[left]+nums[right]> difference){
//         right--;
//       }else if(nums[left]+nums[right]<difference){
//         left++;
//       }
//     }
//   }
//   return result;
// };

var threeSum = function (nums = []) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    let a = nums[i];
    if (i > 0 && a === nums[i - 1]) {
      // i++;
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = a + nums[l] + nums[r];
      if (sum >  0) {
        r--;
      } else if (sum < 0) {
        l++
      } else {
        result.push([a, nums[l], nums[r]])
        //why do we increment l ? - to explore more combinations
        l++;
        //why do we need this while loop? - used to skip over duplicate values in the sorted array. Therefore we increment l until we are at a left pointer that is no longer a duplicate value
        while (nums[l] === nums[l-1] && l < r){
          l++;
        }
      }
    }
  }
  return result;
};
console.log(threeSum([2, 4, -1, -1, 3, -2, -2, 5]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([ -2, 0, 0, 2, 2 ]))

/* 
[0,0,0,0];
 i
       l   
       r
  
result = [
  [0,0,0], 
  [0,0,0]
]
*/
