/**
 * * Park's Code
 * @param {number[]} nums
 * @return {number}
 */
const parkMaxSubArray = nums => {
  // ! Time Limit Exceeded
  // let max = Math.max(...nums);
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 1; j <= nums.length; j++) {
  //     const subArray = nums.slice(i, j);
  //     if (!subArray.length) continue;
  //     const subArraySum = subArray.reduce((acc, cur) => acc + cur, 0);
  //     max = subArraySum > max ? subArraySum : max;
  //   }
  // }
  // return max;
  let max = -Infinity;
  let localSum = 0;

  nums.forEach(num => {
    localSum = Math.max(num, localSum + num);
    max = Math.max(localSum, max);
  });
  return max;
};
