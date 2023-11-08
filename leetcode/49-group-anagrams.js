/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","tae","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

["eat","tea","tan","ate","nat","tae","bat"]
[ 'a', 'e', 't' ]
[ 'a', 'e', 't' ]
[ 'a', 'n', 't' ]
[ 'a', 'e', 't' ]
[ 'a', 'n', 't' ]
[ 'a', 'e', 't' ]
[ 'a', 'b', 't' ]

{
  aet: [eat, tea, ate],
  ant: [tan]
}
*/

const isAnagram = function(a='',b=''){
  const lookup = {}
  if(a.length !== b.length) return false;
  for(let i = 0; i<a.length; i++){
    const aChar = a[i];
    const bChar = b[i];
    if(lookup[aChar] === undefined){
      lookup[aChar] = 1
    }else{
      lookup[aChar] +=1
    }
    if(lookup[bChar] === undefined){
      lookup[bChar] = -1
    }else{
      lookup[bChar] -=1
    }
  }
  return !Object.values(lookup).some(num=>num !==0)
}

var groupAnagramsLessEfficient = function(strs=[]) {
  const map = {};
  //look at each string in strs, for each str do:
  for(let str of strs){
    //does the map have a key that is an anagram of current string? if so, push the current string into the value for that key
    const foundKey = Object.keys(map).find(key=>isAnagram(key,str))
    if(foundKey!==undefined){
      map[foundKey].push(str)
    }else{
      //if not- create a key with that string and set value [str]
      map[str] = [str]
    }
  }
  //return the values
  return Object.values(map)
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs=[]) {
  const map = {};
  for(let str of strs){
    let arr = str.split("")
    arr.sort((charA,charB)=>charA.toLowerCase() > charB.toLowerCase()? 1:-1)
    let sortedStr = arr.join("")
    if(sortedStr in map){
      map[sortedStr].push(str)
    }else{
      map[sortedStr] = [str]
    }
  }
  return Object.values(map)


};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","tae","bat"]))