// doeun ----------------------------------------------------------------------------------------------------------//
const hwangIsIsomorphic = function(s, t) {
  let sRegExp = [];
  let tRegExp = [];
  
  s.split('').forEach((str, i) => {
      const idx = s.indexOf(str)
      sRegExp.push(idx !== i? idx : i) 
  })
  
  t.split('').forEach((str, i) => {
  const idx = t.indexOf(str)
     tRegExp.push(idx !== i? idx : i) 
  })
  
  return sRegExp.filter((s, i) => s !== tRegExp[i]).length === 0
};