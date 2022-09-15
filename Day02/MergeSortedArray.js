// doeun ----------------------------------------------------------------------------------------------------------//
const hwangMerge = function(nums1, m, nums2, n) {
    
  for(let i = 0; i < n; i++){
      nums1.splice(nums1.indexOf(0), 1, nums2[i]);
  }
  nums1.sort((a, b) => a - b)

};