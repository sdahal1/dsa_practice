/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

mississippi
     i
issip
j

 si = 1
*/

// function strStr(haystack="",needle=""){
//   let j = 0;
//   let startIdx = 0;
//   for(let i = 0; i<haystack.length; i++){
//     startIdx = i;
//     while(haystack[i] === needle[j] && j<needle.length){
//       j++;
//       i++;
//     }
//     if(j >= needle.length){
    
//       return startIdx;
//     }
//     j = 0;
//     i= startIdx
//   }
//   return -1;
// }


/* 
abababcababc
  i
ababc
     j

lps = [0,0,1,2,0]

i = 0
j = 0

*/
function computeLPSArray(needle) {
  const lps = [0];
  let len = 0; // Length of the previous longest prefix suffix

  for (let i = 1; i < needle.length; ) {
    if (needle[i] === needle[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

function strStr(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  const lps = computeLPSArray(needle);
  console.log("lps", lps)
  let i = 0; // Index for haystack
  let j = 0; // Index for needle

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j;
    }

    if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}


console.log(strStr("whasapsspasadbutsad", "sad"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("abababcababc", "ababc"));

