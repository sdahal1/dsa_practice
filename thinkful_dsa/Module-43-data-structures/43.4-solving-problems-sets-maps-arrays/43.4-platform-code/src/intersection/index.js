function intersection(a=[], b=[]) {
  const resultMap = new Map();
  const resultSet = new Set();
  a.forEach(elem=>{
    resultMap.set(elem, 1)
  })
  b.forEach(elem=>{
    if(resultMap.has(elem)){
      resultSet.add(elem);
    }
  })

  return Array.from(resultSet);
}

// console.log(intersection([1,2,3,4],[2,4,8]))

module.exports = intersection;
