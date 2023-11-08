function bubbleSort(compare, elements) {
  if(elements === null) return null;
  if(!Array.isArray) return [];

  let inOrder;

  do{
    inOrder = true;
    for(let i = 0, length = elements.length; i<length-1; i++){
      const leftElem = elements[i];
      const rightElem = elements[i+1];
      if(compare(leftElem,rightElem)>0){
        elements[i] = rightElem;
        elements[i+1] = leftElem;
        inOrder = false;
      }
    }
  }while(inOrder === false)
  return elements;
}

module.exports = bubbleSort;
