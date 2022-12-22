//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxSubarraySumCircular = function(nums) {
  let cur1 = 0;
  let cur2 = 0;
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < nums.length; i++){
      cur1 = Math.max(0, cur1) + nums[i];
      cur2 = Math.min(0, cur2) + nums[i];

      max = Math.max(cur1, max);
      min = Math.min(cur2, min);

      sum += nums[i];
  }

  return max < 0 ? max : Math.max(max, sum - min);
};