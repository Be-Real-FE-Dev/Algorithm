
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