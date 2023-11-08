function bubbleSort(compare, elements){
  if(!Array.isArray(elements)) return false;
  for(let i = 0; i<elements.length; i++){
    for(let j = i+1; j<elements.length; j++){
      let result = compare(elements[i], elements[j])
      if(result === 1){
        const temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
      }
    }
  }
  return elements;
}

function bubbleSort2(compare, elements){
  if(!Array.isArray(elements)) return false;

  let inOrder;
  do{
    // console.log('in do', {inOrder})
    inOrder = true;
    for(let i = 0, length = elements.length; i<length-1; i++){
      let leftElem = elements[i];
      let rightElem = elements[i+1];
      console.log({leftElem, rightElem, i})
      if(compare(leftElem,rightElem) === 1){
        elements[i] = rightElem;
        elements[i+1] = leftElem;
        inOrder = false;
      }
      console.log({inOrder})
    }
  }while(inOrder === false)
  return elements;
}


function compare(elemA, elemB){
  if(elemA < elemB){
    return -1;
  }else if(elemA > elemB){
    return 1;
  }else{
    return 0;
  }
}


// console.log(bubbleSort2(compare, [4,7,5,2,1,0,9,8,5]))


/* 
[4,5,2,1,0,7,8,5,9]

io = false
i = 0;


*/

// console.log("b".localeCompare("b"))