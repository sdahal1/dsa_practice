/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Input: n = 4
Output: 5
1. 1+1+1+1
2. 1+1+2
3. 1+2+1
4. 2+1+1
5. 2+2

Input: n = 5
Output: 8
1. 1+1+1+1+1
2. 1+1+1+2
3. 1+1+2+1
4. 1+2+1+1
5. 2+1+1+1
6. 2+2+1
7. 2+1+2
8. 1+2+2

*/

function climbStairs(n, memo={}){
  if(n===0 || n===1) return 1;
  if(memo[n]!==undefined){
    return memo[n]
  }
  else{
    memo[n] = climbStairs(n-1,memo)+climbStairs(n-2,memo)
  }
  return memo[n]
}

function fib(n, memo={}){
  if(n===0 || n===1) return 1;
  if(memo[n]!==undefined){
    return memo[n]
  }
  else{
    memo[n] = fib(n-1,memo)+fib(n-2,memo)
  }
  return memo[n]
}

// console.log(climbStairs(2)) //2
// console.log(climbStairs(3)) //3
// console.log(climbStairs(4)) //5
// console.log(climbStairs(5)) //8

console.log(fib(2)) //2
console.log(fib(3)) //3
console.log(fib(4)) //5
console.log(fib(50)) //8



