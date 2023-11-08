/* 
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"



 10
i

101111
j

110001
c=0,1,0
*/


function addBinary(a,b){
  let i = a.length -1;
  let j = b.length -1;
  let carry = 0;
  let arr = []
  while(i>=0 && j >=0){
    if(a[i] === "1" && b[j] === "1"){
      if(carry > 0){
        arr.push("1")
      }else{
        arr.push("0");
      }
      carry = 1;
    }else if(a[i] === "0" && b[j] === "0"){
      if(carry>0){
        arr.push("1");
        carry = 0;
      }else{
        arr.push("0")
      }
    }else{
      if(carry > 0){
        arr.push("0")
      }else{
        arr.push("1");
      }
    }
    j--
    i--
  }
  while(i>=0){
    if(carry > 0 && a[i] === "1"){
      arr.push('0')
    }else if(carry === 0 && a[i] === "0"){
      arr.push("0")
    }else{
      arr.push("1")
      carry = 0;
    }
    i--;
    // carry = 0;
  }
  while(j>=0){
    if(carry > 0 && b[j] === "1"){
      arr.push('0')
    }else if(carry === 0 && b[j] === "0"){
      arr.push("0")
    }else{
      arr.push("1")
      carry = 0;
    }
    j--;
    // carry = 0;
  }
  if(carry > 0) arr.push('1');

  return arr.reverse().join("")
}

console.log(addBinary("11", "1")) // 100
console.log(addBinary("0", "0")) // 0
console.log(addBinary("1", "111")) // 1000
console.log(addBinary("100", "110010")) // 110110
console.log(addBinary("101111", "10")) // 110001




// console.log(addBinary("1010", "1011")) //10101
// console.log(addBinary("1011", "1011")) // 10110

