/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  if(numbers.length===0)return [];
  numbers.sort((a,b)=>{
    return a-b;
  });
  return [numbers[0], numbers[numbers.length-1]];
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  const result = [];
  if(numbers.length === 0) return result;
  let max = numbers[0],
      min = numbers[0]
  for(let i = 1; i<numbers.length; i++){
    const currentNum = numbers[i];
    if(currentNum > max){
      max = currentNum;
    }
    if(currentNum < min){
      min = currentNum;
    }   
  }
  return [min,max];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
