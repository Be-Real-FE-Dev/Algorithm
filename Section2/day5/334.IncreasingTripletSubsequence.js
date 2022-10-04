/**
 * * Park ****************************************************************
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  const tmp = [Infinity, Infinity];

  for (let i = 0; i < nums.length; i++) {
    if (tmp[0] < tmp[1] && tmp[1] < nums[i]) return true;

    if (tmp[0] < nums[i]) tmp[1] = nums[i];
    else tmp[0] = nums[i];
  }

  return false;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIncreasingTriplet = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let mid = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= mid) {
      mid = nums[i];
    } else return true;
  }

  return false;
};
