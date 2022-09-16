// ******************************************************* 세훈

const jeongIntersect = function(nums1, nums2) {
let resultArr = []
let nums2Idx = 0
nums1.sort((a, b) => a - b)
nums2.sort((a, b) => a - b)

for (let i = 0; i < nums1.length; i++) {
  let findIdx = nums2.indexOf(nums1[i],nums2Idx)
  if(findIdx !== -1) {
    resultArr.push(nums2[findIdx])
    nums2Idx = ++findIdx
  }
}

return resultArr
};

// ***********************************************************