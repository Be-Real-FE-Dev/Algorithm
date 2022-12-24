/**
 * @param {number[]} nums
 * @return {number}
 */
const park_maxSubArray = function (nums) {
  let memo = 0;
  let result = -Infinity;
  nums.forEach(num => {
    memo = Math.max(num, num + memo);
    result = Math.max(memo, result);
  });
  return result;
};

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

