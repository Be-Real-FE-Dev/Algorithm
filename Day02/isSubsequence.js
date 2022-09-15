// doeun ----------------------------------------------------------------------------------------------------------//
const hwangIsSubsequence = function(s, t) {
  let sIndex = 0;
  let tIndex = 0;
  
  while(s.length > sIndex){
      if(tIndex > t.length - 1) return false;
      
      let st = s.charAt(sIndex);
      let tt = t.charAt(tIndex);
      
      if(st === tt) {
          sIndex += 1
          tIndex += 1
      } else {
          tIndex += 1
      }
  }
  
  return true;  
};