/**
 * * ************************* Park's Code *************************
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const parkCanConstruct = (ransomNote, magazine) => {
  const map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (!map.has(magazine[i])) map.set(magazine[i], 1);
    else map.set(magazine[i], map.get(magazine[i]) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i]) && map.get(ransomNote[i]) !== 0) map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    else return false;
  }
  return true;
};

//Dabin's solution ----------------------------------------------------------------------------------------
var kimCanConstruct = function(ransomNote, magazine) {
  let answer = true;
  const obj = {};
  
  [...magazine].forEach(char => {
      obj[char] = (obj[char] || 0) + 1;
  });
  
  [...ransomNote].forEach(char => {
      if(!obj[char]) answer = false;
      else obj[char] -= 1;
  });
  
  return answer;
};

//End of Dabin ----------------------------------------------------------------------------------------

// * 세훈
const jeongCanConstruct = function (ransomNote, magazine) {
  let CopyMagazine = magazine;

  for (let i = 0; i < ransomNote.length; i++) {
    const idxOfResult = CopyMagazine.indexOf(ransomNote[i]);
    const regex = new RegExp(`${ransomNote[i]}`);

    if (idxOfResult !== -1) {
      CopyMagazine = CopyMagazine.replace(regex, '');
    } else return false;
  }

  return true;
};
//

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangCanConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    const idx = magazine.indexOf(ransomNote[i]);

    if (idx === -1) return false;

    magazine = magazine.slice(0, idx) + magazine.slice(idx + 1);
  }

  return true;
};

//* 최원오 -----------------------------------------------------------------------------

const choiCanConstruct = function (ransomNote, magazine) {
  const magazineArr = magazine.split('');

  for (let i = 0; i < ransomNote.length; i++) {
    const idx = magazineArr.indexOf(ransomNote[i]);

    if (idx === -1) return false;
    magazineArr.splice(idx, 1);
  }

  return true;
};

