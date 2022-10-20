/**
 * * Park ********************************************************
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const parkTwoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];

    if (sum < target) left += 1;
    else if (sum > target) right -= 1;
}

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
}
// * wonoh -------------------------------------------------------

const choiTwoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum === target) return [start + 1, end + 1];
    if (sum < target) start++;
    else end--;

  }
};
