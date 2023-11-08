const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  const midpoint = Math.floor(sentence.length/2);
  const stack = new Stack();
  for(let i = 0; i<midpoint; i++){
    stack.push(sentence[i])
  }
  const isOdd = sentence.length % 2 === 1? true : false;
  for(let i = isOdd? midpoint+1: midpoint; i< sentence.length; i++){
    if(stack.pop() !== sentence[i]) return false;
  }
  return true;
};

// console.log(isPalindrome("no lemon, no melon"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("youngmula"))



module.exports = isPalindrome;
