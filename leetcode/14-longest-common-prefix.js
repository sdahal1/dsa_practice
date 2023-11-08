/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //sort the strs in alphabetical order
  strs.sort((strA,strB)=>{
    return strA > strB ? 1 : -1
  })
  const firstElement = strs[0];
  const lastElement = strs[strs.length - 1];
  let result = "";
  for(let i = 0; i<firstElement.length; i++){
    if(firstElement[i] === lastElement[i]){
      result += firstElement[i]
    }else{
      break;
    }
  }
  return result;
};

console.log(longestCommonPrefix(strs = ["flower","flow","flight"]))