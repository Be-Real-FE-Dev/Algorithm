
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


/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const parkIsSubsequence = (s, t) => {
  let rest = t;

  for (let i = 0; i < s.length; i++) {
    const position = rest.indexOf(s[i]) + 1;

    if (!position) return false;

    rest = rest.slice(position);
  }
  return true;
};

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiIsSubsequence = function(s, t) {
  let newString = t;
  
  for (let i = 0; i < s.length; i++){
      
     if (newString.indexOf(s[i]) === -1) return false;
      
      const findIdx = newString.indexOf(s[i]);
      newString = newString.slice(findIdx + 1);
     
  }
  return true;
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------

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


// 세훈  --------------------------------

const jeongIsSubsequence = function(s, t) {
  let result = true
let index = 0
let arr = []
  s = [...s]
  t = [...t]

  s.map(s => {
    const indexNum = t.indexOf(s,index)
    if(indexNum === -1) {
  result = false
  return
  }
  if(indexNum !== -1) {
    index = indexNum + 1
    }
    arr.push(indexNum)
})
const sortArr = [...arr].sort((a,b)=> a>b)

    if(arr.join(',')!== sortArr.join(',')) result = false

    return result
};

// -----------------------------------------

// joeun
const leeIsSubsequence = function(s, t) {
  let pos = -1;
  for (let i = 0; i < s.length; i++) {
      pos = t.indexOf(s[i], pos + 1); 
      if (pos === -1) return false;
  }
  return true;
};
