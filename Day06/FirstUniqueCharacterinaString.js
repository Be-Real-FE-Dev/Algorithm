
//Dabin's solution --------------------------------------------------------------------------------------------------------------
var kimFirstUniqChar = function(s) {
  let answer = -1;
  
  for(let i=0; i<s.length; i++){
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
          answer = s.indexOf(s[i])
          break;
      }
      
  }
  return answer
};

//End of Dabin --------------------------------------------------------------------------------------------------------------

// * 세훈
const jeongFirstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const regex = new RegExp(`${s[i]}`);
    const testString = s.replace(regex, '*');
    if (!regex.test(testString)) return i;
  }
  return -1;
};
//

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFirstUniqChar = function (s) {
  const str = [...s].filter((str, i) => s.indexOf(str) === i && s.indexOf(str, i + 1) === -1)[0];

  return s.indexOf(str);
};

//* 최원오 -----------------------------------------------------------------------------

const choiFirstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};
