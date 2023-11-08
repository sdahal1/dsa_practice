/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  if(s1.length !== s2.length) return false;
  const lookup = new Map();
  for(let char of s1.toLowerCase()){
    if(!lookup.get(char)){
      lookup.set(char, 1)
    }else{
      lookup.set(char,lookup.get(char)+1)
    }
  }
  for(let char of s2.toLowerCase()){
    if(lookup.get(char) === undefined || lookup.get(char) <=0 ){
      return false;
    }else{
      lookup.set(char,lookup.get(char)-1)
    }
  }
  return true;
}

// console.log(anagram("hello", "olhel"))//true
// console.log(anagram("who", "dis"))//true


module.exports = anagram;
