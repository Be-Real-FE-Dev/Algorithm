const leePivotIndex = nums => {
  const sum = nums.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < nums.length; i++) {
    const rightArr = nums.slice(i + 1, nums.length + 1);
    const rightSum = rightArr.reduce((acc, cur) => acc + cur, 0);
    const remain = sum - rightSum - nums[i];

    if (rightSum === remain) return i;
  }
  return -1;
};
