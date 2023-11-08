/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  //create an empty map
  const result = new Map();
  //loop through words[]
  for(let word of words){
    //put the characters into set to get it unique
    const set = new Set(word.toLowerCase());
    //turn each set to an array so we can sort it
    // console.log(sortedSet.join(""))
    const sortedSet = Array.from(set).sort((a,b)=>{
      return a>b? 1:-1
    })
    //turn it into a char string again using .join()
    const sortedChar = sortedSet.join("");
    //check if the map has a key representing the current sorted char word. If not, put the word into an array. if so, push the word to existing array
    if(result.has(sortedChar)){
      result.get(sortedChar).push(word)
    }else{
      result.set(sortedChar, [word])
    }
  }
  return result;
}

console.log(sameLetters(["pair", "per", "pole", "pear", "peer", "reap", "lope"]))

module.exports = sameLetters;
