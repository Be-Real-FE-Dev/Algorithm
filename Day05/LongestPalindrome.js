
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

//* 최원오 -----------------------------------------------------------------------------

const choiLongestPalindrome = function (s) {
  const strObj = {};
  let maxLength = 0;
  let includeOddNum = false;

  for (let i = 0; i < s.length; i++) {
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
  });

  return includeOddNum ? maxLength + 1 : maxLength;
};

/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @return {number}
 */
const parkLongestPalindrome = s => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  let oddNumCounter = 0;
  return (
    Array.from(map.values())
      .map(el => {
        if (el % 2 === 1) oddNumCounter++;
        return el;
      })
      .reduce((acc, cur) => acc + cur, 0) - (oddNumCounter > 1 ? oddNumCounter - 1 : 0)
  );
};



//Dabin's solution ----------------------------------------------------------------------------------------
var longestPalindrome = function(s) {
  let arrS = [...s].sort((a,b) => a - b);
  let even = 0;
  let odd = 0;
  let obj = {}
  
  arrS.forEach(char => {
      obj[char] = (obj[char] || 0) + 1
  })
  

  for (let char in obj) {
      if(obj[char] % 2 === 0) {
          even += obj[char]
          console.log(even, obj[char], 'even')
      }else if((obj[char] > 2 && obj[char] % 2 !== 0)){
          even += (obj[char]-1);
          odd += 1;
      }else if(obj[char] === 1) odd += 1
}
  
  return odd >= 1 ? even + 1 : even
};
//End of Dabin ----------------------------------------------------------------------------------------