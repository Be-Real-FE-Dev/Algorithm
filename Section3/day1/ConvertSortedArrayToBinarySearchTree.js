// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
