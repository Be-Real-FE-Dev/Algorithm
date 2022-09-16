
//Dabin's solution-----------------------------------------------------------------------------------
var merge = function(nums1, m, nums2, n) {

  for(let i=0; i<n; i++){
     nums1.pop()
  }
  for(let i=0; i<n; i++){
      if(nums2.length === 0) {
          return nums1};
      nums1.push(nums2[i])
  }
  console.log(nums1)
  return nums1.sort((a,b) => a-b)
};
//End of Dabin-------------------------------------------------------------------------------------------------


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


//* 세훈  ------------------------------

const jeongMerge = function(nums1, m, nums2, n) {
let nums2Idx = 0

for(let i= m; i < nums1.length; i++){
if(nums1[i] === 0){
nums1[i] = nums2[nums2Idx++]
}
}
return nums1.sort((a,b) => a - b)
  };
  
  
  //* -------------------------------

  // joeun
  const leeMerge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2)
    nums1.sort((a,b) => a - b)    
  };