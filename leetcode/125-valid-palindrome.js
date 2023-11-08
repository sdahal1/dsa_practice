/**
 * @param {string} s
 * @return {boolean}
 */

/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
function removeNonAlphanumeric(inputString) {
  // Use regex to replace non-alphanumeric characters with an empty string
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '');
  return cleanedString;
}

var isPalindrome = function(s) {
  //remove all nonalphanumeric characters
  s = removeNonAlphanumeric(s.toLowerCase());
  console.log(s)
  for(let i = 0; i<s.length; i++){
    if(s[i] !== s[s.length-1-i]) return false;
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))