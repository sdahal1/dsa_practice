/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word="") {
  const map = new Map();
  for(let char of word.toLowerCase()){
    
    if(map.get(char) === undefined){
      map.set(char, 1)
    }else if(map.get(char)=== 1){
      map.set(char, map.get(char)-1)
    }else{
      map.set(char, map.get(char)+1)

    }
  }

  //convert map values to array
  const arrayOfValues = Array.from(map.values())
  if(arrayOfValues.filter(num=>num>0).length>1) return false;
  return true;
}

console.log(permutationPalindrome("DogeeseseeGod")) 
console.log(permutationPalindrome("acecarr")) 
console.log(permutationPalindrome("ASantaatNASA")) 
console.log(permutationPalindrome("wazzap there")) 


// function permutationPalindrome(word="") {
//   //get an array of permutations (anagram) of this word
//   const arrayOfAnagrams = getAnagrams(word);
//   //loop through anagram array, and check each word if its a palindrome
//   let result = false;
//   arrayOfAnagrams.forEach(anagram=>{
//     if(isPalindrome(anagram)){
//       result = true;
//       return;
//     }
//   })
//   return result;

// }

// function isPalindrome(str=''){
//   for(let i = 0; i<Math.floor(str.length/2); i++){
//     if(str[i]!== str[str.length-1-i]){
//       return false;
//     }
//   }
//   return true;
// }

// function getAnagrams(str) {
//   // First, we split the input string into an array of characters
//   // const chars = str.split('');
//   const result = []

//   // Next, we define a recursive function to find all the anagrams
//   function findAnagrams(prefix, suffix) {
//     // If there are no more characters to add to the prefix,
//     // we've found a complete anagram!
//     if (suffix.length === 0) {
//       // console.log(prefix);
//       result.push(prefix)
//       return;
//     }

//     // Loop through all the remaining characters and add each
//     // one to the prefix in turn
//     for (let i = 0; i < suffix.length; i++) {
//       const nextPrefix = prefix + suffix[i];
//       const nextSuffix = suffix.slice(0, i) + suffix.slice(i + 1);
//       findAnagrams(nextPrefix, nextSuffix);
//     }
//   }

//   // Start the recursive function with an empty prefix and all the characters as suffix
//   findAnagrams('', str);
//   return result;
// }

// console.log(permutationPalindrome("acecar"))
// Example usage:
// console.log(getAnagrams('abc'));

// console.log("abc".slice(1))

module.exports = permutationPalindrome;
