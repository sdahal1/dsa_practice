/* 
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.


Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

j = 0
[2,2,3,3]
       i
     j
*/

function removeElement(nums=[],val=0){
  let j = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== val){
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  console.log(nums)
  return j
}

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([3,3,2,2,2,3,3,2], 3))
console.log(removeElement([2,3,2,2,2,3,3,2], 3))



