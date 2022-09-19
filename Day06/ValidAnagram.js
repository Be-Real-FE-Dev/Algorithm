// * doeun 1번쨰--------------------------------------------------------------------------------------------------------------------//
const hwangIsAnagram1 = function(s, t) {
  if(s.length !== t.length) return false;
  
  for(let i = 0; i < s.length; i++){
      const idx = t.indexOf(s[i]);
      if(idx === -1) return false;
      else {
          t = t.slice(0, idx) + t.slice(idx + 1)
      }
  }
  
  return true
};

// * doeun 2번쨰 //
const hwangIsAnagram2 = function(s, t) {
  if(s.length !== t.length) return false;
  
  const alphabet = new Array(26).fill(0)
  
  for(let i = 0; i < s.length; i++){
      alphabet[s[i].charCodeAt(0) - 97] += 1;
      alphabet[t[i].charCodeAt(0) - 97] -= 1;
  }
  
  return alphabet.every(num => num === 0)
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
