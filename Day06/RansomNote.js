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
