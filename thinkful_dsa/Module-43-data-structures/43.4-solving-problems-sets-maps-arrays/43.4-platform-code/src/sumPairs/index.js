/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairsBruteForce(A=[], N) {
  const result = [];
  for(let i = 0; i<A.length; i++){
    const elemA = A[i];
    for(let j = i+1; j<A.length; j++){
      const elemB = A[j];
      if(elemA+elemB === 10){
        result.push([elemA,elemB])
      }
    }
  }
  return result;
}

function sumPairs(A=[], N) {
  const result = [];
  const numbers = new Map();
  const solution = new Map();
  for(let i = 0; i<A.length; i++){
    const elemA = A[i];
    numbers.set(elemA, 1);
  }

  for(const num of numbers.keys()){
    const difference =  Math.abs(N-num);
    if(numbers.has(difference) && difference != num){
      //set the key to be the smaller number to avoid having duplicate pairs like [4,7], and [7,4];
      solution.set(Math.min(num, difference), Math.max(num, difference))
    }
  }

  // console.log(map.keys())
  return Array.from(solution);
}

console.log(sumPairs([3, 2, 4, 6, 7, 5],10))

/* 
{
  3: 1,
  2: 1,
  4: 1,
  6: 1,
  7: 1,
  5: 1
}

*/


module.exports = sumPairs;
