/**
  @param {string} s
  @return {number}


Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
var romanToInt = function(s) {
  const lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0
  for(let i=0; i<s.length; i++){
    const char = s[i];
    //figure out if we add or substract
    if(char === "I" && s[i+1] === "V" || char === "I" && s[i+1] === "X" || char === "X" && s[i+1] === "L" || char === "X" && s[i+1] === "C" || char === "C" && s[i+1] === "D" || char === "C" && s[i+1] === "M"){
      sum -= lookup[char];
    }else{
      sum += lookup[char]
    }
  }
  return sum
};


console.log(romanToInt('XXVII'))
console.log(romanToInt('IV'))
