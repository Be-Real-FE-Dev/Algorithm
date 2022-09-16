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