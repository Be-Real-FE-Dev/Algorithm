//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwanggetMaxLen = function (nums) {
  let max = 0;
  let firstNegative = -1;
  let zeroIdx = -1;
  let negativeCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      if (firstNegative < 0) firstNegative = i;
      negativeCount += 1;
    }

    if (nums[i] === 0) {
      firstNegative = -1;
      zeroIdx = i;
      negativeCount = 0;
    } else if (negativeCount % 2 === 0) {
      max = Math.max(max, i - zeroIdx);
    } else {
      max = Math.max(max, i - firstNegative);
    }
  }

  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const park_getMaxLen = function (nums) {
  let frameIndex = 0;
  let negativeCount = 0;
  let startNegativePointIndex = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur === 0) {
      frameIndex = i + 1;
      negativeCount = 0;
    }

    if (cur > 0) {
      if (negativeCount % 2 === 0) {
        result = Math.max(result, i - frameIndex + 1);
      } else {
        result = Math.max(result, i - startNegativePointIndex);
      }
    }

    if (cur < 0) {
      if (negativeCount === 0) startNegativePointIndex = i;
      negativeCount++;

      if (negativeCount % 2 === 0) {
        result = Math.max(result, i - frameIndex + 1);
      } else {
        result = Math.max(result, i - startNegativePointIndex);
      }
    }
  }

  return result;
};
