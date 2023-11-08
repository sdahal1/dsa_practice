function searchSuggestions(repository = [], customerQuery = ""){
  if(customerQuery.length < 2) return [];
  repository.sort((wordA, wordB)=>{
    if(wordA.toLowerCase() > wordB.toLowerCase()){
      return 1;
    }else{
      return -1;
    }
  })
  const result = [];
  let searchSoFar = ""
  for(let i = 0; i<customerQuery.length; i++){
    searchSoFar+= customerQuery[i]
    if(searchSoFar.length < 2) continue;
    
    const subArr = [];
    for(let word of repository){
      // console.log(word, searchSoFar, word.startsWith(searchSoFar))
      if(word.startsWith(searchSoFar) && subArr.length<3){
        subArr.push(word);
      }
      // console.log(subArr)
      if(subArr.length === 3){
        break;
      }
    }
    result.push(subArr)
  }
  return result;
}

console.log(searchSuggestions(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"))