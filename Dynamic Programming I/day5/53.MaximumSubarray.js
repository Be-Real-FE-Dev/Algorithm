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

//* wonoh

const choiMaxSubArray = function(nums) {
  let max = nums[0];
  let curMax = nums[0]; 

  for (let i = 1; i < nums.length; i++){
      curMax = Math.max(curMax + nums[i], nums[i]);
      max = Math.max (max, curMax);
  }

  return max;
};

// ? dbin
const kimMaxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1])
    console.log(nums[i])
    }   
    
    return Math.max(...nums)
  }