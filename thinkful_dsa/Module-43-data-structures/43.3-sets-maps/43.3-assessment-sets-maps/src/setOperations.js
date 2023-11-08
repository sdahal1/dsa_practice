/**
 * return the union of two sets
 */
function union(s1, s2) {
  const x = [...s1, ...s2];
  return new Set(x);
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  //build out a new set that only contains values in both sets
  const result = new Set();
  s1.forEach(num=>{
    if(s2.has(num)){
      result.add(num)
    }
  })
  return result;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  const result = new Set();
  s1.forEach(num=>{
    if(!s2.has(num)){
      result.add(num)
    }
  })
  return result;
}

module.exports = { union, intersect, difference };
