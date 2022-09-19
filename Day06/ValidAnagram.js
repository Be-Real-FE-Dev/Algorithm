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