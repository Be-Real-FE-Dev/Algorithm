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