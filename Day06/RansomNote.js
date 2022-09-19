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