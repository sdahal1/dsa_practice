function indexOf(isMatch, elements=[]) {
  if(elements === null || !Array.isArray(elements)) return -1;
  let length = elements.length;
  for (let i = 0; i < length; i++) {
        let currentElem = elements[i];
        let matches = isMatch(currentElem, i, elements);
        if(matches === true){
          return i;
        }
    }
    return -1;
}

module.exports = indexOf;
