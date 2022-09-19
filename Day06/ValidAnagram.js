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