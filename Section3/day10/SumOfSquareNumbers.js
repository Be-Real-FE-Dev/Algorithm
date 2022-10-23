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
