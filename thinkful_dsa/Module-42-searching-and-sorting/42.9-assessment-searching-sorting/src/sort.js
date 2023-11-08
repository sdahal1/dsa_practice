/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
  if(elements.length <=1){
    // console.log(elements);
    return elements;
  }
  const midpoint = Math.floor(elements.length/2);
  const leftHalf = elements.slice(0,midpoint);
  const rightHalf = elements.slice(midpoint);
  const result =  combine(compare, sort(compare, leftHalf),sort(compare, rightHalf))
  // console.log('result', result);
  return result;
  // return elements;

}

// [3,2,6,7,4,0,3]

// console.log(sort(compare, [3,2,6,7,4,0,3]))
// console.log(sort(compare, ["b", "a", "t", "a", "c"]))


function combine(compare,arr1, arr2){
  const result = [];
  let i = 0;
  let j = 0;
  while(i<arr1.length && j<arr2.length){
    const comparison = compare(arr1[i], arr2[j])
    if(comparison < 0){
      // console.log(i)
      result.push(arr1[i])
      i++;
    }else if(comparison > 0){
      // console.log(i)
      result.push(arr2[j])
      j++;
    }else{
      result.push(arr1[i])
      result.push(arr2[j])
      i++;
      j++;
    }
  }

  while(i<arr1.length){
    result.push(arr1[i])
    i++;
  }

  while(j<arr2.length){
    result.push(arr2[j])
    j++;
  }

  return result;
}



// console.log(combine(compare, [1,3,3,5,7], [0,2,3,6,9]))


module.exports = sort;
