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
