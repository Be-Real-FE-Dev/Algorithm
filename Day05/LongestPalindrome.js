// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLongestPalindrome = function(s) {
  const alphabet = [...new Set(s.split(''))].map(str => s.match(new RegExp(str, 'g')).length)
  let isOdd = false;
  
  const result = alphabet.reduce((acc, cur) => {
      if(cur % 2){
          isOdd = true;
          return acc + cur - 1;
      } else {
          return acc + cur
      }
  }, 0);
  
  
  return isOdd? result + 1 : result
};