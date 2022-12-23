//* wonoh

const choiMaxProduct = function(nums) {
  let result = nums[0];
  let localMax = 1;
  let localMin = 1;
  let localMaxTemp = localMax;
  
  for (num of nums) {      
      localMaxTemp = localMax;
      localMax = Math.max(localMax * num, localMin * num, num);
      localMin = Math.min(localMaxTemp * num, localMin * num, num);
      result = Math.max(localMax, result);
  }
  
  return result;
};