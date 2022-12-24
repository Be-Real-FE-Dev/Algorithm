//* wonoh

const choiMaxProduct = function (nums) {
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

//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProduct = function (nums) {
  let result = nums[0];
  let min = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    const temp = min;
    min = Math.min(min * nums[i], max * nums[i], nums[i]);
    max = Math.max(temp * nums[i], max * nums[i], nums[i]);
    result = Math.max(max, result);
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const park_maxProduct = function (nums) {
  let [max, min] = [nums[0], nums[0]];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const temp = [nums[i], nums[i] * max, nums[i] * min];
    max = Math.max(...temp);
    min = Math.min(...temp);
    result = Math.max(result, max);
  }

  return result;
};
