
// 세훈 --------------------------------

// const jeongIsIsomorphic = function(s, t) {
//   let sArr = [0]
//   let tArr = [0]
//   let result = true;

//   for (let i = 0; i <= s.length; i++) {
//    for (let j = 0; j < i; j++) {
//     if(s[j] === s[i]) {
//       sArr.push(j)
//      }else if(j === i -1) {
//      sArr.push(i)
//      }
//      if(t[j] === t[i]) {
//        tArr.push(j)
//       }else if(j === i -1) {
//       tArr.push(i)}
//   }
//   }
//   return sArr.join(',') === tArr.join(',')
// };


// const jeongIsIsomorphic = function(s, t) {
//   let result = true;

//   for (let i = 0; i <= s.length; i++) {
//    for (let j = 0; j < i; j++) {
//     if(s[j] === s[i] && t[j] !== t[i]) {
//       result = false;
//       break
//      }else if(s[j] !== s[i] && t[j] === t[i]) {
//       result = false;
//       break
//     }
//   }
//   }
//   return result
// };

const jeongIsIsomorphic = function(s, t) {
  let result = true;

  for (let i = 0; i <= s.length; i++) {
    if(s.indexOf(s[i])!==t.indexOf(t[i])){
      result = false 
      break }
  }
  return result
};

// console.log( jeongIsIsomorphic("paper","title"))
// ----------------------------------------------------------------

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


