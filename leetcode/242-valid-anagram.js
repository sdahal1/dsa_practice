/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
  const lookup = {}
  if(s.length !== t.length) return false;
  for(let i = 0; i<s.length; i++){
    const sChar = s[i]
    if(lookup[sChar] === undefined){
      lookup[sChar] = 1
    }else{
      lookup[sChar] += 1
    }
  }
  for(let i = 0; i<t.length; i++){
    const tChar = t[i]
    if(lookup[tChar] === undefined){
      return false;
    }else{
      lookup[tChar] -= 1
    }
  }

  return Object.values(lookup).every(num=>num===0)
};

var isAnagram2 = function(s, t) {
  const lookup = {}
  if(s.length !== t.length) return false;
  for(let i = 0; i<s.length; i++){
    const sChar = s[i]
    const tChar = t[i]
    if(lookup[sChar] === undefined){
      lookup[sChar] = 1
    }else{
      lookup[sChar] += 1
    }
    if(lookup[tChar] === undefined){
      lookup[tChar] = -1
    }else{
      lookup[tChar] -= 1
    }
  }
  return Object.values(lookup).every(num=>num===0)
};

console.log(isAnagram2("anagram", "nagaram")) //true
console.log(isAnagram2("rat", "car")) //false


/* 
{
  a: 0,
  n: 0,
  g: 0,
  r: 0,
  m: 0
}

*/