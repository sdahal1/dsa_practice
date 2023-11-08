const Stack = require('./lib/stack');

const evaluate = (expression) => {
  expression = expression.replace(/ /g, "")
  const stack = new Stack();
  for(let char of expression){
    const pattern = /^[+\-*/]+$/;
    if(pattern.test(char)){
      //its an operator (+-/*)
      const operand2 = Number(stack.pop());
      const operand1 = Number(stack.pop());
      let result = eval(`${operand1} ${char} ${operand2}`)
      stack.push(result);
    }else{
      stack.push(char)
    }
    
  }
  return stack.top.value;
};

// console.log(evaluate("234*+"))
// console.log(evaluate("34*25*+"))


//234*+

//stack = [2,12]
//result= 14

module.exports = evaluate;
