const Stack = require("./lib/stack");

const match = (expression) => {
  expression = expression.replace(/[^\(\)\[\]\{\}]/g, "");
  const stack = new Stack();

  const lookup = {
    ")": "(",
    "]": "[",
    "}": "{"
  }

  for(let char of expression){
    //if char matches the opening ([{
    if(char.match(/[(\[\{]/)){
      stack.push(char)
    }else{
      if(!stack.top) return false;
      if(stack.top.value === lookup[char]){
        stack.pop();
      }
    }
  }
  if(stack.top){
    return false;
  }
  return true;
};


// console.log(match("a + (((b + c))) + d"));//true
// console.log(match("a + ((b + c))) + d"));//false - less opening (
// console.log(match("a + (((b + cx)) + d"));//false - less opening )
// console.log(match("a + ())(b + cx(()) + d"));//false - premature )
// console.log(match("([{}])")) // true





module.exports = match;

//[]