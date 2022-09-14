// ******************************************************* 세훈
const jeongPivotIndex = function (nums) {
  let result = -1;

  for (let i = 0; i <= nums.length - 1; i++) {
    const a = nums.slice(0, i).reduce((pre, cur) => pre + cur, 0);
    const b = nums.slice(i + 1).reduce((pre, cur) => pre + cur, 0);

    if (a === b) return (result = i);
    if (i === nums.length - 1 && a === 0) return (result = i);
  }
  return result;
};
// console.log(jeongPivotIndex([-1, -1, 0, 1, 1, 0]));
// ***********************************************************

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiPivotIndex = function (nums) {
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    const rightSum = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0);

    if (leftSum === rightSum) {
      result = i;
      break;
    }
  }

  return result;
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------


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
}

// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangPivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums.filter((_, idx) => idx < i);
    let right = nums.filter((_, idx) => i < idx);

    let leftSum = left.length === 0 ? 0 : left.reduce((acc, cur) => acc + cur);
    let rightSum =
      right.length === 0 ? 0 : right.reduce((acc, cur) => acc + cur);

    if (leftSum === rightSum) return i;
  }

  return -1;
};

