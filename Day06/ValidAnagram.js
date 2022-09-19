
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

//* 최원오 -----------------------------------------------------------------------------

const choiIsAnagram = function(s, t) {
    
  if (s.length !== t.length) return false;
  
  sObj = {};
  tObj = {};
  
  for (let i = 0; i < s.length; i++){
      sObj[s[i]] = sObj[s[i]] ? sObj[s[i]] + 1 : 1;
      tObj[t[i]] = tObj[t[i]] ? tObj[t[i]] + 1 : 1;
  }
  
  const keyArr = Object.keys(sObj);
  
  for (let i = 0; i < keyArr.length; i++){
      if(sObj[keyArr[i]] !== tObj[keyArr[i]]) return false;
  }
  
  return true;
};

