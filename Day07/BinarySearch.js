
//Dabin's solution ----------------------------------------------------------------------------------------
var kimSearch = function(nums, target) {
  let mid = 0;
  let left = 0;
  let right = nums.length-1;
  
  while(left<=right){
      mid = Math.floor(left + right)/2
      if(nums[mid] === target) return mid;
      
      if(nums[mid]>target){
          right = mid - 1;
      }else{
          left = mid + 1
      }
  }
  return -1
};
//End of Dabin ----------------------------------------------------------------------------------------

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearch = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right){
      let mid = Math.floor((left + right) / 2);
      
      if(nums[mid] === target) return mid;
      
      if(nums[mid] > target) right = mid - 1;
      else if(nums[mid] < target) left = mid + 1;
  }
  
  return -1;
};

