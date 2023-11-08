const anagram = require("./anagram");
/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words=[]) {
  let result = []
  let map = new Map();
  for(let i = 0; i<words.length; i++){
    const word1 = words[i];
    if(map.get(word1) === undefined){
      map.set(word1, 1)
      let subArr = [word1];
      for(let j = i+1; j<words.length; j++){
        const word2 = words[j];
        const isAnagram = anagram(word1,word2);
        if(isAnagram){
          map.set(word2, 1)
          subArr.push(word2)
        }
      }
      result.push(subArr)
    }
  }
  return result;
}

// console.log(anagramGroups(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
// console.log(anagramGroups(["rain", "fire", "wind", "earth"]))

module.exports = anagramGroups;
