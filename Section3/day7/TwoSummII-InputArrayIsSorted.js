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
