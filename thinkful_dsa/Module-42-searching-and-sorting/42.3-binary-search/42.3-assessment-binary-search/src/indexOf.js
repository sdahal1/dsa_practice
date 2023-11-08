function indexOf(compare, sortedElements) {
  if(Array.isArray(sortedElements)){
    let start = 0;
    let end = sortedElements.length-1;
    while(start<=end){
      const midIdx = Math.floor((start+end)/2);
      const element = sortedElements[midIdx];
      if(compare(element, midIdx, sortedElements) === 0){
        return midIdx
      }
      if(compare(element,midIdx, sortedElements) > 0){
        start = midIdx+1
      }else{
        end = midIdx-1
      }
    }
  }
  return -1;
}

module.exports = indexOf;
