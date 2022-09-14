//Dabin's solution
var kimContainsDuplicate = function (nums) {
  let duplication = new Set(nums);

  return nums.length === duplication.size ? false : true;
};
