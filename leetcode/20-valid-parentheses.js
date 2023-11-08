/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const lookup = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  let isValid = true;

  for(let char of s){
    //if its an open char
    if(char === "(" || char === "[" || char === "{"){
      stack.push(char);
    }else{
      let poppedOpenChar = stack.pop();
      if(lookup[poppedOpenChar] !== char){
        isValid = false;
        break;
      }
    }

  }
  if(stack.length) return false;
  return isValid
};

/* 
[(]
popped = (


*/

console.log(isValid("()[]{(}"))
console.log(isValid("("))
