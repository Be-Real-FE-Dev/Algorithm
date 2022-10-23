/**
 * * Park ************************************************
 * @param {number} c
 * @return {boolean}
 */
const parkJudgeSquareSum = function (c) {
  let left = 0;
  let right = Math.ceil(Math.sqrt(c));

  while (left <= right) {
    const sum = left ** 2 + right ** 2;
    const mid = Math.floor(left + (right - left) / 2);

    if (c === sum) return true;
    if (c > sum) left = c > mid ** 2 + right ** 2 ? mid + 1 : left + 1;
    else right = c < mid ** 2 + left ** 2 ? mid - 1 : right - 1;
  }
  return false;  
}
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangJudgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left ** 2 + right ** 2;
    if (sum === c) return true;
    if (sum < c) left += 1;
    else right -= 1;
  }

  return false;
};
