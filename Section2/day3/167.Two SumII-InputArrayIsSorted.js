//* 최원오 -----------------------------------------------------------------------------

const choiTwoSum = function (numbers, target) {
  let s = 0;
  let e = numbers.length - 1;

  while (s < e) {
    const sum = numbers[s] + numbers[e];
    if (sum === target) break;

    if (sum > target) e -= 1;
    else if (sum < target) s += 1;
  }
  return [s + 1, e + 1];
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangTwoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < numbers.length) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
};
