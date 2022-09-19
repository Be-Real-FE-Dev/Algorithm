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