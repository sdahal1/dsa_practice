/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



abcabcbb
 l
   r


   
abba
  l
   r
{
  a:0,
  b:2
}
cL = 2
longestSoFar = 2

*/

// function lengthOfLongestSubstring(s=""){
//   if(s.length === 0) return 0;
//   let lookup = {};
//   let longestSoFar = 0;
//   let leftIdx = 0;
//   let rightIdx = 0;
//   while(rightIdx < s.length){
//     const currentChar = s[rightIdx];
//     if(lookup[currentChar] === undefined){
//       lookup[currentChar] = rightIdx;
//     }else{
//       if(leftIdx <= lookup[currentChar]){
//         leftIdx = lookup[currentChar]+1;
//       }
//       lookup[currentChar]=rightIdx;
//     }
//     let currentRange = rightIdx-leftIdx;
//     // console.log({currentRange, leftIdx,rightIdx})
//     if(currentRange>longestSoFar) {
//       longestSoFar = currentRange;
//     }
//     rightIdx++;
//   }
//   return longestSoFar+1
// }

function lengthOfLongestSubstring(s=""){
  if(s.length === 0) return 0;
  let lookup = {
    [s[0]]:0
  }
  // console.log(lookup)
  //have two pointers
  let leftIdx = 0;
  let rightIdx = 1;
  let longestSoFar = 1;
  let currentLength = 1;
  while(rightIdx < s.length){
    let currentChar = s[rightIdx];
    //if the current char already exists in the lookup
    if(lookup[currentChar] !== undefined){
      //find out when the last time we saw currentChar using the lookup
      let lastIdx = lookup[currentChar]
      if(leftIdx <= lastIdx){
        //set the left index to be one index to the right of wherever we last saw the currentchar
        leftIdx = lastIdx+1;
      }
      //set currentLength by subtracting rightindex+1 - leftindex to get curentLength
      currentLength = (rightIdx+1)-leftIdx;
      lookup[currentChar] = rightIdx;
    }
    //else if the current char is not alredy in the lookup
    else{
      // add current char at key into lookup, set value to be the currentChars index (rightIdx)
      lookup[currentChar] = rightIdx;
      //increment currentLength by 1
      currentLength++
    }
    if (currentLength > longestSoFar){
      longestSoFar = currentLength;
    }
    //increment rightIdx
    rightIdx++
  }
  return longestSoFar
}

console.log(lengthOfLongestSubstring("dvdf")); //3
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("davidf")); //5
console.log(lengthOfLongestSubstring("abba")); //2



