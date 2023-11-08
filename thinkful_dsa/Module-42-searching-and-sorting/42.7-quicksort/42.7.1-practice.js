//partition means to select an element from the array, and put it in the array so that everything to the left of it is less than it and everything to the right of it is greater than it. Then return the index of the new position of the selected element
function partition(arr, left=0, right=arr.length-1){
  const pivotVal = arr[left];
  let pivotIdx = left;
  for(let i=left+1; i <= right; i++){
    const currentElem = arr[i];
    if(currentElem <= pivotVal){
      pivotIdx++;
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
      
    }
  };

  [arr[left], arr[pivotIdx]] = [arr[pivotIdx], arr[left]];
  console.log(arr)
  return pivotIdx
}

console.log(partition([3,2,-8,3,8]))


function quicksort(arr, left=0, right=arr.length-1){
  //we will call on partition on the full array, then partition the left side, and right side
  
  if(left>=right){
    return arr;
  }
  console.log({arr, left, right})
  const partitionidx = partition(arr, left, right);
  console.log(arr, partitionidx)
  quicksort(arr, left, partitionidx-1)
  quicksort(arr, partitionidx+1, right)
  return arr;
}

// console.log(quicksort([3,8,2,12,9,7,-8,3]))
// console.log(quicksort([5,-3,4,2,4,7]))



/* 
qs([3,8,2,3],0,3)
  




*/

// console.log(partition([ -3, 2, 4, 5, 7 ], 0,1))

module.exports = quicksort;