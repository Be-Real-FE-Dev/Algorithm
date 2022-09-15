//Dabin's solution-----------------------------------------------------------------------------------
var kimIsIsomorphic = function(s,t) {
   
  //index로 비교 
  let arrS = [];
  let arrT = [];
  for(let i=0; i<s.length; i++){
      
      console.log(s.indexOf(s[i]));
      arrS.push(s.indexOf(s[i]))
      arrT.push(t.indexOf(t[i]))
  }
  const sameArr = (arrS.length === arrT.length && arrS.every((value, idx) => value === arrT[idx]));
  return sameArr
};
//End of Dabin-------------------------------------------------------------------------------------------------