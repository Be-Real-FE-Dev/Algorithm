
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangCanConstruct = function(ransomNote, magazine) {
  for(let i = 0; i < ransomNote.length; i++){
      const idx = magazine.indexOf(ransomNote[i]);
      
      if(idx === -1) return false;
      else {
          magazine = magazine.slice(0, idx) + magazine.slice(idx + 1);
      }
  }
    
    return true;
};

//* 최원오 -----------------------------------------------------------------------------

const choiCanConstruct = function(ransomNote, magazine) {
  const magazineArr = magazine.split('');
  
  for (let i = 0; i < ransomNote.length; i++){
      let idx = magazineArr.indexOf(ransomNote[i]);
      
      if (idx === -1) return false;
      magazineArr.splice(idx, 1);
  }

  return true;
};