/**
 * @param {number[]} nums
 * @return {number}
 */
// const pivotIndex = nums => {
//   let [currentSum, result] = [0, -1];
//   const total = nums.reduce((acc, cur) => acc + cur, 0);

//   nums.forEach((num, index) => {
//     if (currentSum === total - currentSum - num) {
//       result = index;
//     }
//     currentSum += num;
//   });
//   return result;
// };

const pivotIndex = nums => {
  const sum = nums.reduce((r, n) => r + n, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    const right = sum - left - nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
