/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function searchInsert(nums=[],target=0){
  for(let i = 0; i<nums.length-1; i++){
    if(nums[i] === target || nums[i] > target) return i;
    if(nums[i]< target && nums[i+1] > target) return i+1;
  }
  if(nums[nums.length-1] < target) return nums.length;
  if(nums[nums.length-1] >= target) return nums.length-1;
}

console.log(searchInsert([1,3,5,6],-5)) //0
console.log(searchInsert([1,3,5,6],5)) //2
console.log(searchInsert([1,3,5,6],2)) //1
console.log(searchInsert([1,3,5,6],7)) //4
console.log(searchInsert([1],0)) //4

