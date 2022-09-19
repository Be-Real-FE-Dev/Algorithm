//Dabin's solution --------------------------------------------------------------------------------------------------------------
var kimFirstUniqChar = function(s) {
  let answer = -1;
  
  for(let i=0; i<s.length; i++){
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
          answer = s.indexOf(s[i])
          break;
      }
      
  }
  return answer
};

//End of Dabin --------------------------------------------------------------------------------------------------------------