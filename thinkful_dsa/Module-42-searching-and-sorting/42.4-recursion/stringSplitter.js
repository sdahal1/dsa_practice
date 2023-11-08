function stringSplitter(str, char){
  const index = str.indexOf(char)

  if(index<0){
    //base case
    return [str]
  }
  // console.log(str.slice(0,index))
  // let result = [];
  // result = result.concat(stringSplitter(str.slice(0,index), char))
  // result = result.concat(stringSplitter(str.slice(index+1), char))

  const leftSide = stringSplitter(str.slice(0,index), char);
  const rightSide = stringSplitter(str.slice(index+1), char);
  return [...leftSide, ...rightSide]
  // return stringSplitter(str.slice(0,index), char).concat(stringSplitter(str.slice(index+1), char))
}

// console.log(stringSplitter("Hi to all in this room", " "));
// console.log(stringSplitter("Hi", " ")); //base case
// console.log(stringSplitter("Hi there everybody", " ")); //base case





function splitta(str, char){
  const index = str.indexOf(char)
  if(index < 0){
    return [str]
  }
  const leftSide = str.substring(0,index)
  const rightSide = str.substring(index+1)
  const leftResult = splitta(leftSide,char)
  const rightResult = splitta(rightSide,char)

  return [...leftResult, ...rightResult]
}

function splitta2(str, char){
  const index = str.indexOf(char)
  if(index < 0){
    return [str]
  }
  const leftSide = str.substring(0,index)
  const rightSide = str.substring(index+1)
  const rightResult = splitta(rightSide,char)

  rightResult.unshift(leftSide)

  return rightResult
}

// console.log(splitta("hello", " "))
console.log(splitta2("hello there who dis", " "))


/* 
splitta("hello there who dis");
ls = "hello"
rs= "there who dis"
rr = splitta("there who this")-> ["there", "who", "dis"]
  ls = "there"
  rs = "who dis"
  rr = splitta("who dis"); -> ["who dis"]
    ls = "who"
    rs = "dis"
    rr = splitta("dis");-> ["dis"]
    rr.unshift("who") -> ["who dis"]
    return ["who dis"]
  rr.unshift("there")
  return ["there", "who", "dis"]
rr.unshift("hello")-> ["hello", "there", "who", "dis"]
return ["hello", "there", "who", "dis"]



*/