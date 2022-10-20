// * wonoh -------------------------------------------------------

const choiSpecialArray = function (nums) {
  nums.sort((a, b) => a - b);

  let idx = 0;

  while (idx <= nums[nums.length - 1]) {
    const filterCount = nums.filter(num => num >= idx).length;
    if (filterCount === idx) return idx;

    idx += 1;
  }
  return -1;
};
