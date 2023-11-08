/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

function removeDuplicates(nums){
  let lastIdx = 0;
  for(let i = 1; i<nums.length; i++){
    if(nums[lastIdx] !== nums[i]){
      if(lastIdx+1 !== i) {
        [nums[i], nums[lastIdx+1]] = [nums[lastIdx+1], nums[i]];
      }
      lastIdx++
    }
  }
  return nums.slice(0,lastIdx+1);
}

console.log(removeDuplicates([1,2,2,3,4,5,5,5,6]))
console.log(removeDuplicates([1,1,2,2,2,3,4,5,5,5,6]))
console.log(removeDuplicates([1,1,1,1,2,2,2,3,4,5,5,5,6]))
console.log(removeDuplicates([1,1,2]))



/* 
[1,2,3,4,5,6,2,5,5,2]
           l
                     i

[1,1,2,2,2,3,4,5,5,5,6]
 l
     i

[1,1,1,1,2,2,2,3,4,5,5,5,6]

*/