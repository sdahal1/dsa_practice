//given an array of number elements, find any 2 elements that are not equal, and do this as many times as needed until you have gotten as many pairs removed as possible. Basically return the minimum number of elements that will not be cancelled out
function removeNonMatchingPairs(nums=[]){
  const freqObj = {}
  for(const num of nums){
    if(freqObj[num]===undefined){
      freqObj[num] = 1;
    }else{
      freqObj[num]++
    }
  }
  // console.log(freqObj)
  //sort the frequency counts so that it helps us to do the calculation in using a for-loop later
  const valuesArr = Object.values(freqObj).sort((a,b)=>b-a);
  // console.log(valuesArr)
  if(valuesArr.length === 1) return 0;
  //start canceling out the most frequent elements until there are no or minimum matches left
  let min = 0
  for(let i = 0; i<valuesArr.length; i++){
    min = Math.abs(min-valuesArr[i])
  }
  return min;
}


console.log(removeNonMatchingPairs([1,1,1,1,3,3,4,4,4,4,4,5,6,7,7,8])) //0
console.log(removeNonMatchingPairs([1,2,3,3,4,5,5,5,7,7,7,7,7,7,7])) //1
console.log(removeNonMatchingPairs([1,2,3,3,3,3,3,3,4,5])) //2
console.log(removeNonMatchingPairs([1,1,1,1,1,2,2])) //3




// [1,1,1,1,3,3,4,4,4,4,4,5,6,7,7,8]
// [4,4,4,4,4,1,1,1,1,3,3,7,7,5,6,8]
// [,,,,,,,,,,,,,,,,,,8]
//