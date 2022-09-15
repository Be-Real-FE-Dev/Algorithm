// 세훈 --------------------------------

// const jeongIsIsomorphic = function(s, t) {
//   let sArr = [0]
//   let tArr = [0]
//   let result = true;

//   for (let i = 0; i <= s.length; i++) {
//    for (let j = 0; j < i; j++) {
//     if(s[j] === s[i]) {
//       sArr.push(j)
//      }else if(j === i -1) {
//      sArr.push(i)
//      }
//      if(t[j] === t[i]) {
//        tArr.push(j)
//       }else if(j === i -1) {
//       tArr.push(i)}
//   }
//   }
//   return sArr.join(',') === tArr.join(',')
// };


// const jeongIsIsomorphic = function(s, t) {
//   let result = true;

//   for (let i = 0; i <= s.length; i++) {
//    for (let j = 0; j < i; j++) {
//     if(s[j] === s[i] && t[j] !== t[i]) {
//       result = false;
//       break
//      }else if(s[j] !== s[i] && t[j] === t[i]) {
//       result = false;
//       break
//     }
//   }
//   }
//   return result
// };

const jeongIsIsomorphic = function(s, t) {
  let result = true;

  for (let i = 0; i <= s.length; i++) {
    if(s.indexOf(s[i])!==t.indexOf(t[i])){
      result = false 
      break }
  }
  return result
};

// console.log( jeongIsIsomorphic("paper","title"))
// ----------------------------------------------------------------