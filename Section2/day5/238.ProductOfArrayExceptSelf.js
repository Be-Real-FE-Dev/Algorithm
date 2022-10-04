/**
 * * Park ************************************************
 * @param {number[]} nums
 * @return {number[]}
 */
const parkProductExceptSelf = function (nums) {
  const result = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    result.push(product);
    product *= nums[i];
  }

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }

  return result;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangProductExceptSelf = function (nums) {
  const arr = [];
  arr[0] = nums.reduce((acc, cur, i) => {
    if (i === 0) return acc;
    return acc * cur;
  }, 1);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) arr[i] = (arr[i - 1] / nums[i]) * nums[i - 1];
    else
      arr[i] = nums.reduce((acc, cur, idx) => {
        if (i === idx) return acc;
        return acc * cur;
      }, 1);
  }

  return arr;
};
