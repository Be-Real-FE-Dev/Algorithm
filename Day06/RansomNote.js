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
