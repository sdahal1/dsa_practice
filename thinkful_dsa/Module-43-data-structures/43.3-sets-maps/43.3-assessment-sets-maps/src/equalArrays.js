/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  const map = new Map();
  a1.forEach(num=>{
    if(!map.get(num)){
      map.set(num, 1)
    }else{
      map.set(num, map.get(num)+1)
    }
  })
  a2.forEach(num=>{
    if(map.get(num) === undefined){
      map.set(num, -1);
    }else{
      map.set(num, map.get(num)-1)
    }
  })

  // console.log(Array.from(map.values()))

  return Array.from(map.values()).every(elem=>elem === 0)
}

module.exports = isEqual;
