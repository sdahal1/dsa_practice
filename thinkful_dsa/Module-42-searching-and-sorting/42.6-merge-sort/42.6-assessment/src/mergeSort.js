function mergeSort(compare, elements) {
  if(elements === null) return null;
  if(elements.length <=1){
    return elements;
  }
  const mid = Math.floor(elements.length/2);
  const lefthalfsorted = mergeSort(compare, elements.slice(0,mid))
  const righthalfsorted = mergeSort(compare, elements.slice(mid))
  return merge(compare, lefthalfsorted, righthalfsorted);
}

function merge(compare, arr1, arr2){
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

  if(i<arr1.length){
    return result.concat(arr1.slice(i))
  }else{
    return result.concat(arr2.slice(j))
  }
}

module.exports = mergeSort;
