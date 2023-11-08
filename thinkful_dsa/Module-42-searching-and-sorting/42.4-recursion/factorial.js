function factorial(num){
  let total = num;
  for(let i = num-1; i>0; i--){
    total *= i
  }
  return total
}

// console.log(factorial(5))

function rFactorial(num){
  if(num === 1){
    return 1
  }
 
  return num * rFactorial(num-1)
  
  // return rFactorial(num-1)
}


function rFactorial2(inputNum){
  console.log("forward phase", inputNum);
  //base case
  if(inputNum <=1){
    console.log("base case", inputNum);
    return 1;
  }

  const numMinusOneFactorial = rFactorial2(inputNum-1);

  console.log("Backward Phase", inputNum, "*", numMinusOneFactorial);

  return inputNum*numMinusOneFactorial
}

// console.log(rFactorial2(5))


const houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]

function deliverPresents(houses){
  for(const house of houses){
    console.log(`Delivering presents to ${house}`)
  }
}

// console.log(deliverPresents(houses))

function rDeliverPresents(houses){
  if(houses.length===0){
    return;
  }
  console.log(`Delivering presents to ${houses[0]}`)
  return rDeliverPresents(houses.slice(1))
}

function rDeliverPresents2(houses, i){
  if(i>4)return;
  // console.log(houses)
  if(houses.length===1){
    console.log(`Delivering presents to ${houses[0]}`)
    // return;
  }else{
    const mid = Math.floor(houses.length/2);
    const leftHalf = houses.slice(0,mid);
    const rightHalf = houses.slice(mid)
    console.log({leftHalf,rightHalf})
    rDeliverPresents2(leftHalf, i+1)
    rDeliverPresents2(rightHalf, i+1)
  }
}


// console.log(rDeliverPresents2(houses, 1))
function rSumToNum(currentNum,accumulatedSum){
  if(currentNum === 11){
    return accumulatedSum
  }
  accumulatedSum = accumulatedSum+currentNum;
  return rSumToNum(currentNum+1, accumulatedSum) 
}


function rSigma(num){
  if(num === 1){
    return 1;
  }
  return num + rSigma(num-1);
}
// console.log(rSigma(10))


function topDownFactorial(num, total=1){
  console.log("forward phase", num, "*", total)
  if(num <= 1){
    return total
  }
  total = topDownFactorial(num-1, total*num)

  console.log("backward phase", num, total)
  return total;

}

console.log(topDownFactorial(5))
