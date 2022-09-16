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

//* 최원오 ----------------------------------------------------------------------------------------------------------------------------------
const choiIntersect = function(nums1, nums2) {
  const result = [];
  
  nums1.forEach(num => {
      idx = nums2.indexOf(num); 
  
      if (idx > -1) {
          result.push(num);
          nums2.splice(idx, 1);
      }
      
  })
  
  return result;
};

/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const parkIntersect = (nums1, nums2) => {
  // return nums1.filter(num1 => nums2.includes(num1));
  const result = [];
  nums1.forEach(num => {
    if (nums2.includes(num)) {
      result.push(num);
      nums2.splice(nums2.indexOf(num), 1);
    }
  });
  return result;
};

