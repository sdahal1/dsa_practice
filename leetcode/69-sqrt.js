/* 
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


8
1*1 = 2
2*2 = 4
4*4 = 8
*/

function mySqrt(x){
  let prevSquare=1;
  for(let i = 1; i<x; i++){
    let square = i*i;
    if(square > x){
      return prevSquare
    }else{
      prevSquare = i
    }
  }
  return prevSquare;
}

console.log(mySqrt(8))//2
console.log(mySqrt(4))//2


