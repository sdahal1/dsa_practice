/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

var productExceptSelf = function (nums = []) {
  const prefix = [1];
  const suffix = [1];
  const result = [];
  let prefixNum = 1;
  let suffixNum = 1;
  for (let i = 1; i < nums.length; i++) {
    prefixNum *= nums[i - 1];
    prefix.push(prefixNum);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixNum *= nums[i + 1];
    suffix.push(suffixNum);
  }
  // console.log(prefix)
  // console.log(suffix.reverse())
  for (let i = 0; i < prefix.length; i++) {
    result.push(prefix[i] * suffix[suffix.length - 1 - i]);
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); //

/* 
n=[1,2,3,4]
p=[1,1,2,6]
s=[24,]
r=[72,36,24,36,72,24,36]
*/

