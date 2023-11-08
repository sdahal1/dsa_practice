/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word='') {
  const map = new Map();
  for(let i=0;i<word.length; i++){
    const char = word[i];
    if(map.get(char) === undefined){
      map.set(char, i)
    }else{
      map.set(char, "duplicate")
    }
  }

  console.log(map)
  for(let elem of Array.from(map.entries())){
    if(elem[1]!=='duplicate'){
      return elem[0]
    }
  }
  return null;
}

// console.log(firstSingleCharacter("thinkfulthankfullyiay"))

module.exports = firstSingleCharacter;
