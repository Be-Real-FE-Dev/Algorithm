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
