/**
 * @param {number[]} nums
 * @return {number}
 */
const sumGems = nums => {
  let [cur, next] = [0, 0];
  nums.forEach(num => {
    [cur, next] = [next, Math.max(num + cur, next)];
  });

  return next;
};

const park_rob = function (nums) {
  return Math.max(sumGems(nums.slice(1, nums.length)), sumGems(nums.slice(0, nums.length - 1)), nums[0]);
};

console.log(park_rob([1, 2, 1, 1]));
