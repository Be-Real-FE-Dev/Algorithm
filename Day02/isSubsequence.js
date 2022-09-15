//Dabin is trying
var kimIsSubsequence = function(s,t) {

  let arrT = t.split('')
  let arrS = s.split('')
  for(let i=0; i<arrT.length; i++){
      console.log(arrT)
      if(arrT.includes(arrS[i])) arrS.splice(i,1)
      console.log(arrS)
  }
  console.log(arrT, arrS)
  return arrS.length === 0 ? true : false
};
//End of Dabin-------------------------------------------------------------------------------------------------