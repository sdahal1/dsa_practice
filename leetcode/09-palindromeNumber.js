var isPalindrome = function(x) {
    if(x < 0 ) return false;
    let str = x.toString()
    for(let i = 0; i < Math.floor(str.length/2); i++){
      if(str[i] !== str[str.length-1-i]) return false
    }
    return true
};

console.log(isPalindrome(5005))

