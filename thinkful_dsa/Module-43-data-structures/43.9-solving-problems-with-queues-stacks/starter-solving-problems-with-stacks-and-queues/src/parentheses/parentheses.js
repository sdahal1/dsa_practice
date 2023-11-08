const Stack = require("../lib/stack");

const match = (expression) => {
  expression = expression.replace(/[^()]/g, "")
  // const stack = new Stack();
  const arr = [];
  const stack = new Stack();
  for(let char of expression){
    if(char === "("){
      stack.push(char);
    }else{
      if(!stack.top){
        return false;
      }
      stack.pop()
    }
  }
  if(stack.top) return false;
  return true;

};



module.exports = match;
