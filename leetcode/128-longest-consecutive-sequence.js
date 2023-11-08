/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveSortedWay = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let currentStreak = 1;
  let maxStreak = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      currentStreak = 1;
    }
  }
  return maxStreak;
};

var longestConsecutive = (nums) => {
  if (!nums.length) return 0;
  const numMap = {};
  let maxStreak = 0;
  for (const num of nums) {
    numMap[num] = true;
  }
  for (const num of nums) {
    //if there is no number in the array that is one less than the current num
    if (!numMap[num - 1]) {
      let currentNum = num;
      let currentStreak = 1;
      while (numMap[currentNum + 1]) {
        currentNum++;
        currentStreak++;
      }
      maxStreak = Math.max(currentStreak, maxStreak);
    }
  }
  return maxStreak;
};

//Each sequence has a start value, and the start value has no left neighbor (a number that is one less than it)
const longestConsecutiveNeetcode = (nums) => {
  const set = new Set(nums);
  let maxStreak = 1;
  for(let num of set){
    if(!set.has(num-1)){
      let streak = 1;
      let currentNum = num;
      while(set.has(currentNum+1)){
        streak++;
        currentNum++
        maxStreak = Math.max(maxStreak,streak);
      }
    }
  }
  return maxStreak
};

// console.log(longestConsecutiveNeetcode([0, 3, -3, 7, 2, 5, 8, 4, 6, 0, 1, -1]));
// console.log(longestConsecutiveNeetcode([100, 4, 200, 1, 3, 2, 2]));
// console.log(longestConsecutive([0, -1]));
// console.log(longestConsecutive([1,2,0,1]))
/* 
[0, 3, -3, 7, 2, 5, 8, 4, 6, 0, 1, -1] -> 10
                                    i
ms = 10

cN = 8
cS = 10

*/
