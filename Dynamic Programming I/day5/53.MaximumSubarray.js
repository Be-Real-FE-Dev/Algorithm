//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxSubArray = function(nums) {
  let sum = nums[0];
  let maxSum = nums[0];

  for(let i = 1; i < nums.length; i++){
      sum = Math.max(sum, 0) + nums[i];
      maxSum = Math.max(sum, maxSum);
  }

  return maxSum
};