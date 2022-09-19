
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFirstUniqChar = function(s) {
  const str = [...s].filter((str, i) => s.indexOf(str) === i && s.indexOf(str, i + 1) === -1)[0];
  
  return s.indexOf(str)
}

//* 최원오 -----------------------------------------------------------------------------

const choiFirstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++){
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};