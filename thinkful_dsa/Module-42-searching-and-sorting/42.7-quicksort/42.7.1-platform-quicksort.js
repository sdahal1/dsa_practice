function compare(left, right){
  console.log('compare', {left,right})
  return left-right;
}

function partition(compare, elements = [], lowerIndex = 0, upperIndex= elements.length-1){
  const pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;
  for(let i = lowerIndex; i<upperIndex; i++){
    const comparison = compare(pivotValue, elements[i]);
    if(comparison > 0){ //if the pivot value is greater than the element at current index, then swap the element at current index with element at partition index
      [elements[i], elements[partitionIndex]]=[elements[partitionIndex], elements[i]];
      partitionIndex++;
    }
  }
  [elements[upperIndex], elements[partitionIndex]]=[elements[partitionIndex], elements[upperIndex]];
  // console.log(elements)
  return partitionIndex;
}


function quickSort(compare,elements=[],lowerIndex=0, upperIndex = elements.length-1){
  if(lowerIndex<upperIndex){
    //partition the array and get its partition index
    const partitionIndex = partition(compare, elements, lowerIndex, upperIndex);
    //call quick sort on the array from 0, partitionindex-1
    quickSort(compare, elements, lowerIndex, partitionIndex-1);
    //call quicksort on the array from partitionindex+1 - end
    quickSort(compare, elements, partitionIndex+1);
  
  }
  return elements

}


const arr = [-1, 50,23,9,18,61,32,50, -1];

console.log(quickSort(compare,arr))
/* 
[23,9,18,32,61,50]
                v
         pi
               i               
*/