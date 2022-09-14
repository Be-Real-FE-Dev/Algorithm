/**
 * @param {number[]} nums
 * @return {number[]}
 */
const parkRunningSum = (nums) => {
  return nums.map((num, index, nums) =>
    nums
      .filter((_num, _index) => index >= _index)
      .reduce((acc, cur) => acc + cur)
  );
};

// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangRunningSum = function (nums) {
  return nums.map((_, i) =>
    nums.reduce((acc, cur, idx) => {
      if (idx <= i) return acc + cur;
      else return acc;
    }, 0)
  );
};
