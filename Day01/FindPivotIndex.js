//Dabin's try
const kimPivotIndex = (nums) => {
  let answer = 0;
  let left = 0;
  let sum = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    console.log(sum - left - nums[i + 1], left);
    if (sum - left - nums[i + 1] === left) return i + 1;
    else if (sum - nums[0] === 0 || sum === 0) return 0;
    else if (sum - nums[nums.length - 1] === 0) return nums.length - 1;
    else if (sum - nums[i + 1] === 0) return 0;
  }
  return -1;
};

console.log(pivotIndex([1, 2, 3]));

var kimContainsDuplicate = function (nums) {
  let duplication = new Set(nums);

  return nums.length === duplication.size ? false : true;
};
