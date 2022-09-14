/**
 * * Park's Code
 * @param {number[]} nums
 * @return {number}
 */
const parkPivotIndex = nums => {
  let res = -1;
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.slice(0, i).reduce((acc, cur) => acc + cur, 0) ===
      nums.slice(i + 1, nums.length).reduce((acc, cur) => acc + cur, 0)
    ) {
      res = i;
      break;
    }
  }
  return res >= 0 ? res : -1;
};
