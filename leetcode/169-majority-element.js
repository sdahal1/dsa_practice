/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(nums.length===1){
    return nums[0]
  }
  const obj = {};
  for(let num of nums){
    if(num in obj){
      obj[num]++;
      if(obj[num]>nums.length/2) return num;
    }else{
      obj[num] = 1;
    }
  }
};


//do in O(1) space and linear time - use Boyer-Moor Voting Algorithm
var majorityElement2 = function(nums) {
  let candidate = nums[0];
  let count = 1;
  for(let i = 1; i< nums.length; i++){
    if(nums[i] === candidate){
      count++
    }else{
      count--;
      if(count === 0){
        candidate = nums[i];
        count = 1;
      }
    }
  }
  return candidate;
  
};

console.log(majorityElement2([2,1,2,1,2,1,2,5,2,2,2,7,2,8,2]))

/* 
[2,1,2,1,2,1,2,5,2,2,2,7,2,8,2]
                             i
candidate = 2;
count = 3;

*/