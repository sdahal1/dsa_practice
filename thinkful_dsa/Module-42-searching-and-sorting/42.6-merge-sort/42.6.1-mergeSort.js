function combine(compare, arr1,arr2){
  const result = []
  let i = 0;
  let j = 0;
  while(i<arr1.length && j<arr2.length){
    const comparison = compare(arr1[i], arr2[j]);
    if(comparison <= 0){ //means left arr1[i] > arr2[j]
      result.push(arr1[i])
      i++
    }
    else if(comparison > 0){
      result.push(arr2[j])
      j++
    }
  }

  while(i<arr1.length){
    result.push(arr1[i]);
    i++;
  }

  while(j<arr2.length){
    result.push(arr2[j]);
    j++;
  }
  return result
}

function mergeSort(compare, arr){
  if(arr.length <= 1){
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let lefthalf = arr.slice(0,mid);
  let righthalf = arr.slice(mid);
  let left = mergeSort(compare, lefthalf);
  let right = mergeSort(compare, righthalf);
  return combine(compare, left, right)
}


module.exports = mergeSort;

