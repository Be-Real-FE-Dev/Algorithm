/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const parkIsAnagram = (s, t) => s.split('').sort().join() === t.split('').sort().join();


//Dabins' solution----------------------------------------------------------------------------------------
var kimIsAnagram = function(s, t) {

  let obj = {};
  let answer = true;

  if(s.length !== t.length) return false;
  [...s].forEach(char => {
    obj[char] = (obj[char] || 0) + 1;
   });

  [...t].forEach(char => {
    if(!obj[char]) answer = false;
    else obj[char] -= 1;
  });
  
   return answer;
};
//End of Dabin ----------------------------------------------------------------------------------------

// * 세훈

const jeongIsAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if ([...s].sort().join('') !== [...t].sort().join('')) return false;
  return true;
};
//

// * doeun 1번쨰--------------------------------------------------------------------------------------------------------------------//
const hwangIsAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const idx = t.indexOf(s[i]);
    if (idx === -1) return false;

    t = t.slice(0, idx) + t.slice(idx + 1);
  }

  return true;
};

// * doeun 2번쨰 //
const hwangIsAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  const alphabet = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    alphabet[s[i].charCodeAt(0) - 97] += 1;
    alphabet[t[i].charCodeAt(0) - 97] -= 1;
  }

  return alphabet.every(num => num === 0);
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

//* 최원오 -----------------------------------------------------------------------------

const choiIsAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  sObj = {};
  tObj = {};

  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = sObj[s[i]] ? sObj[s[i]] + 1 : 1;
    tObj[t[i]] = tObj[t[i]] ? tObj[t[i]] + 1 : 1;
  }

  const keyArr = Object.keys(sObj);

  for (let i = 0; i < keyArr.length; i++) {
    if (sObj[keyArr[i]] !== tObj[keyArr[i]]) return false;
  }

  return true;
};


//* 조은 -----------------------------------------------------------------------------

const leeIsAnagram = function(s, t) {
  let arrA = [];
  let arrB = [];
  
  if (t.length !== s.length) return false;
  
  for (let i = 0; i < t.length; i++) {
      arrA.push(t.charCodeAt(i))
      arrB.push(s.charCodeAt(i))
  }
  
  return (arrA.sort((a,b) => b-a).toString() === arrB.sort((a,b) => b-a).toString())
};