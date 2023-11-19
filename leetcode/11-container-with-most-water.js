/* 
[1,8,6,2,5,4,8,3,7]
 0 1 2 3 4 5 6 7 8
 i
                 j
*/

function maxArea(height=[]){
  let max = -Infinity;
  let i = 0;
  let j = height.length-1;
  while(i<j){
    const x = j-i;
    const y = Math.min(height[i], height[j]);
    const area = x*y;
    if(area > max){
      max = area;
    }
    //find out which pointer to move based on which element is smaller
    if(height[i]< height[j]){
      i++;
    }else{
      j--;
    }
  }
  return max;
}


function maxAreaNaive(height=[]){
  let max = -Infinity;
  for(let i = 0; i<height.length-1; i++){
    for(let j = i+1; j<height.length; j++){
      let x = j-i;
      let y = Math.min(height[i], height[j]);
      let area = x*y;
      if(area > max){
        max = area;
      }
    }
  }
  return max;
}




console.log(maxArea([1,8,6,2,5,4,8,3,7]));