// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFirstUniqChar = function(s) {
  const str = [...s].filter((str, i) => s.indexOf(str) === i && s.indexOf(str, i + 1) === -1)[0];
  
  return s.indexOf(str)
};