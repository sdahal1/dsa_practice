/**
 * Implement a brute force algorithm for finding the missing number in an array
 
  [1,4,3,2]
  2
 */
function missingNumberBruteForce(numbers=[]) {
  const n = numbers.length + 1;
  for(let num = 1; num<=n; num++){
    for(let i = 0; i<numbers.length; i++){
      // console.log({i, numAtI: numbers[i], num})
      if(numbers[i] === num){
        break;
      }
      if(i === numbers.length-1){
        return num;
      }
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  //find the expected sum of all integers from 1-n. Then find the actual sum of the numbers in the array. the difference is the Missing number
  const n = numbers.length + 1;
  let sum = 0;
  for(let i = 1; i<=n; i++){
    sum+=i;
  }
  
  const sumArr = numbers.reduce((acc,num)=>{
    return acc+num;
  },0)

  return sum - sumArr;

}

module.exports = { missingNumberBruteForce, missingNumberSum };
