/**
 * @param {number[]} nums
 * @return {number}
 */
const park_rob = function (nums) {
  let [cur, next] = [0, 0];

  nums.forEach(num => {
    [cur, next] = [next, Math.max(num + cur, next)];
  });

  return next;
};
