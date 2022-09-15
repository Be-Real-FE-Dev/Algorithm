
/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const parkIsIsomorphic = (s, t) => getPattern(s) === getPattern(t);

const getPattern = str => {
  const map = new Map();
  let index = 0;
  let pattern = '';
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    if (!map.has(str[i])) map.set(str[i], ++index);
    pattern += map.get(str[i]);
  }

  return pattern;
};


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


