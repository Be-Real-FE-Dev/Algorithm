//* 최원오 -----------------------------------------------------------------------------

const choiLongestPalindrome = function(s) {
  const strObj = {};
  let maxLength = 0;
  let includeOddNum = false;
  
  for(let i = 0; i < s.length; i++){
      strObj[s[i]] = strObj[s[i]] ? strObj[s[i]] + 1 : 1;
  }    
  
  const lengthArr = Object.values(strObj);
  lengthArr.forEach(length => {
      if (length % 2 !== 0) {
          includeOddNum = true;
          maxLength += length - 1;
      } else {
          maxLength += length;
      }
  })

  
  return includeOddNum ? maxLength + 1 : maxLength;
};