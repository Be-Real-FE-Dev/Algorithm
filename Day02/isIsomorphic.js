//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiIsIsomorphic = function(s, t) {
  let strIdx = 0;

  let sIdx = s.indexOf(s[strIdx]);
  let tIdx = t.indexOf(t[strIdx]);

  while (strIdx !== s.length) {
    
    sIdx = s.indexOf(s[strIdx], sIdx + 1);
    tIdx = t.indexOf(t[strIdx], tIdx + 1);
      
    if (sIdx !== tIdx) return false;

    if (sIdx === -1) {
      strIdx += 1;
    }
  }

  return true;

};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------
