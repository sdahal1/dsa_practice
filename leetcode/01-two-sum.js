/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


*/
var twoSum = function(nums=[], target) {
  const map = {};
  for(let i = 0; i<nums.length; i++){
    if(map[nums[i]] !== undefined){
      return [map[nums[i]],i]
    }else{
      const difference = target - nums[i]
      map[difference] = i
    }
  }
};

var twoSum2 = function(nums=[], target) {
  const map = {};
  for(let i = 0; i<nums.length; i++){
    const difference = target - nums[i];

    if(difference in map){
      return [map[difference],i]
    }
    map[nums[i]] = i
  }
};

/* 
{
  7: 0,
  5: 1,
  6: 2,
  8: 3,
}

{
  3:0,
  5:1,
  4:2,
  2:3,

}

*/


console.log(twoSum([3,5,4,2,8,6], 10));
console.log(twoSum([3,5,4,5,6], 10));
