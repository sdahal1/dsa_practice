const Stack = require("../lib/stack");

// const postfixTest = (expression='') => {
//   expression = expression.replace(/\s/g, "");
//   const precedence = {
//     '-': 0,
//     '+': 0,
//     '*': 1,
//     '/': 1
//   }
//   let result = '';
//   const stack = new Stack();
//   //loop through expression
//   for(let char of expression){
//     if (/[()*/+\-]/.test(char)) {
//       if(!stack.top){
//         stack.push(char);
//       }else{
//         if(stack.top.value === ')'){
//           stack.pop();
//           result += stack.pop() + ' '
//         }else{

//           const topOfStack = stack.top.value;
         
//           // console.log({topOfStack, char}, precedence[topOfStack] >= precedence[char])
//           if(precedence[topOfStack] >= precedence[char]){
//             result += stack.pop() + ' '
//             stack.push(char);
//           }else{
//             stack.push(char)
//           }
//         }
//       }
//       //push the current special char to stack
//     }
//     //if its not a special character, then add the char to the result; 
//     else{
//       result += char + ' ';
//     }
//   }
//   // console.log(stack.top.next)
//   while(stack.top){
//     const poppedVal = stack.pop()
//     // console.log({poppedVal})
//     if(poppedVal !== "(" && poppedVal !== ")"){
//       result += poppedVal + ' '
//     }
//   }

//   return result.trim();
// };

// console.log(postfix("a + b - c")) //ab+c-
// console.log(postfix("a + b * c")) //abc*+
// console.log(postfix("a * b + c")) //ab*c+
// console.log(postfix("(a + b)")) //ab+

const postfix = (expression = '') => {
  expression = expression.replace(/\s/g, "");
  const precedence = {
    '-': 0,
    '+': 0,
    '*': 1,
    '/': 1
  }
  // Declare a variable named stack and initialize it to a new stack.
  const stack = new Stack();
  // Declare a variable named result and initialize it to an empty array.
  const result = [];
  // Iterate through each character in the expression, ignoring spaces.
  for(let char of expression){
    // If the current character is (, push it onto the stack.
    if(char === '('){
      stack.push(char)
    }
    // If the current character is ), start popping characters off the stack and add each character to the result until you find a (. Do not add the parentheses to the result.
    else if(char === ')'){
      while(stack.top.value != '('){
        result.push(stack.pop())
      }
      stack.pop()
    }
    // If the current character is an operator:
    else if('+-*/'.includes(char)){
      // Look at the operator at the top of the stack.
      // If the stack is empty, or if the top of the stack is (, or if the current operator has higher precedence than the operator on the top of the stack, then push the current operator onto the stack.
      if(!stack.top || stack.top.value === '(' || precedence[char] > precedence[stack.top.value]){
        stack.push(char)
      }else{
        // Otherwise, start popping operators off the stack if the stack is not empty and the popped operator has higher or equal precedence to the current operator. Each popped operator is added to the result.
        while(stack.top && precedence[stack.top.value]>=precedence[char]){
          result.push(stack.pop());
        }
        stack.push(char)
      }
    }else{
      result.push(char);
    }
  }
  while(stack.top){
    result.push(stack.pop())
  }
  return result.join(' ')




 
}


// console.log(postfix("(a + b) * c"))
// console.log(postfix("(((a + b) * (c - d))/(a - b) + (c / d))")) 



//a  b+



/* 

  it("should transform simple expressions", () => {
      const actual = postfix("a + b");
      expect(actual).toEqual("a b +");
  });

  it("should transform equal precedence operators correctly", () => {
      const actual = postfix("a + b - c");
      expect(actual).toEqual("a b + c -");
  });
    
  it("should transform unequal precedence operators correctly", () => {
      const actual = postfix("a + b * c");
      expect(actual).toEqual("a b c * +");
  });

  it("should remove parentheses", () => {
    const actual = postfix("(a + b)");
    expect(actual).toEqual("a b +");
  });

  it("should interpret parentheses correctly", () => {
    const actual = postfix("(a + b) * c");
    expect(actual).toEqual("a b + c *");
  });

  it("should handle complex expressions", () => {
    const actual = postfix("(((a + b) * (c - d))/(a - b) + (c / d))");
    expect(actual).toEqual("a b + c d - * a b - / c d / +");
    [a b+  c  d-*a  b- / c  d/+]
  });







  const postfix = (expression='') => {
  expression = expression.replace(/\s/g, "");
  const precedence = {
    '-': 0,
    '+': 0,
    '*': 1,
    '/': 1
  }
  let result = '';
  const stack = new Stack();
  //loop through expression
  for(let char of expression){
    if (/[()*\/+\-]/.test(char)) { // if the char is a special char
      // console.log(char)
      if(char === ')'){
        while(stack.top && stack.top.value!= '('){
          result += stack.pop()+ ' ';
        }
        stack.pop();
      }else{ 
        stack.push(char);
      }
    }
    //if its not a special character, then add the char to the result; 
    else{
      result += char + ' ';
    }
  }
  while(stack.top && stack.top.value!= '('){
    result += stack.pop()+ ' ';
  }
  return result.trim()
    //if the current character matches one of the following: '(', ')', '*', '+', '-', '/' then do something
};
*/
module.exports = postfix;





/* 
(((a+b)*(c-d))/(a-b)+(c/d))
                    i 


stack = [(/]
result = [ab+cd-*ab-]


ab+cd-*ab-/cd/+
*/