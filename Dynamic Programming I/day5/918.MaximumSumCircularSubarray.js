/**
 * @param {number[]} nums
 * @return {number}
 */
const park_maxSubarraySumCircular = function (nums) {
  const minSubarraySum = function (nums) {
    let minSum = Number.MAX_SAFE_INTEGER;
    let minSumSoFar = Number.MAX_SAFE_INTEGER;

    for (const n of nums) {
      minSumSoFar = Math.min(n, minSumSoFar + n);
      minSum = Math.min(minSum, minSumSoFar);
    }

    return minSum;
  };

  const maxSubarraySum = function (nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let maxSumSoFar = Number.MIN_SAFE_INTEGER;

    for (const n of nums) {
      maxSumSoFar = Math.max(n, maxSumSoFar + n);
      maxSum = Math.max(maxSum, maxSumSoFar);
    }

    return maxSum;
  };

  const maxSum = maxSubarraySum(nums);
  const totalSum = nums.reduce((prev, curr) => prev + curr, 0);
  const minSum = minSubarraySum(nums);

  if (minSum === totalSum) return maxSum;

  return Math.max(maxSum, totalSum - minSum);
};
