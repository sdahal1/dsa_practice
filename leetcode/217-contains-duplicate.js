/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
var containsDuplicate = function(nums) {
  const lookup = {}
  for(let num of nums){
    if(lookup[num]){
      return true;
    }
    lookup[num] = 1
  }
  return false;
};