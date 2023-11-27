/* 
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.


Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.


AABABBA, k=1
l
  r

{
 a:2,
 b:1
}
longestLength = 3
maxFreqSoFar = 2;

lengthOfSubstring - countOfMostFrequentChar then check if the result is less than or equal to k, if so, then its valid substring and use its length to compare with longest length so far
3-2 = 1;



aabcccabccbaba, 3



*/

function characterReplacement(s="", k=0){
  let l = 0;
  let r = 0;
  let lookup = {};
  let longestLength = -Infinity;
  let maxFreqSoFar = 0;
  while(r < s.length){
    let currentChar = s[r];
    if(lookup[currentChar] === undefined){
      lookup[currentChar] = 1;
    }else{
      lookup[currentChar] += 1;
    }
    if(lookup[currentChar] > maxFreqSoFar){
      maxFreqSoFar = lookup[currentChar];
    }
    // console.log(maxFreqSoFar)
    const lengthOfCurrentSubstring = (r-l)+1;
    let allowedSubs = lengthOfCurrentSubstring - maxFreqSoFar;
    
    if(allowedSubs <= k){
      if(lengthOfCurrentSubstring > longestLength){
        longestLength = lengthOfCurrentSubstring;
      }
    }else{
      let leftChar = s[l]
      lookup[leftChar]--;
      l++;
    }
    console.log({allowedSubs,lengthOfCurrentSubstring,maxFreqSoFar, lookup, longestLength})
    r++;
  }
  return longestLength;
}

// console.log(characterReplacement("ABAB", 2)) //4
console.log(characterReplacement("AABABBA", 1)) //4
