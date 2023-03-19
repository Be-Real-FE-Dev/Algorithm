const checkEditReplace = (str1, str2) => {
  let edits = 0;
  for (let i = 0; i <str1.length; i++){
    if(str1[i] !== str2[i]){
      edits += 1;
    }
  }

  return edits < 2;
}

const checkEditInsertOrDelete = (str1, str2) => {
  let index1 = 0;
  let index2 = 0;

  while(index1 < str1.length && index2 < str2.length){
    if (str1[index1] !== str2[index2]){
      if (index1 !== index2){
        return false;
      }

      index2++;
    } else {
      index1++;
      index2++;
    }
  }

  return true;
}

const oneAway = (str1, str2) => {
  if (str1.length === str2.length){
    return checkEditReplace(str1, str2);
  } else if (str1.length - 1 === str2.length) {
    return checkEditInsertOrDelete(str2, str1)
  } else if (str1.length + 1 === str2.length) {
    return checkEditInsertOrDelete(str1, str2)
  }
  return false;
}