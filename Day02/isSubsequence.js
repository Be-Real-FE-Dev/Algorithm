//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiIsSubsequence = function(s, t) {
  let newString = t;
  
  for (let i = 0; i < s.length; i++){
      
     if (newString.indexOf(s[i]) === -1) return false;
      
      const findIdx = newString.indexOf(s[i]);
      newString = newString.slice(findIdx + 1);
     
  }
  return true;
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------
