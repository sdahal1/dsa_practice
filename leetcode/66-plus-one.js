/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].


*/
function plusOne(digits=[]){
  let carry = 0
  if(digits[digits.length-1] !== 9){
    digits[digits.length-1] = digits[digits.length-1]+1;
  }else{
    carry = 1
    let i = digits.length-1;
    while(carry > 0 && i >= 0){
      if(digits[i] === 9){
        digits[i] = 0
      }else{
        digits[i] = digits[i] + 1;
        carry = 0
      }
      i--;
    } 
  }
  if(carry > 0){
    digits.unshift(1)
  }
  return digits;
}
/* 
[0]
i

carry = 1

*/
// console.log(plusOne([1,2,3])) //[1,2,4]
// console.log(plusOne([1,2,9])) //[1,3,0]
console.log(plusOne([1,2,9,9])) //[1,3,0,0]
console.log(plusOne([9])) //[1,0]
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
