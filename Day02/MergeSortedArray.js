
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

/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const parkMerge = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);

  return nums1;
};

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiMerge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2.slice(0, n));
  nums1.sort((a,b) => a - b);
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------

// doeun ----------------------------------------------------------------------------------------------------------//
const hwangMerge = function(nums1, m, nums2, n) {
    
  for(let i = 0; i < n; i++){
      nums1.splice(nums1.indexOf(0), 1, nums2[i]);
  }
  nums1.sort((a, b) => a - b)

};
