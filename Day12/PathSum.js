// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangHasPathSum = function (root, targetSum) {
  if (root === null) return false;

  targetSum -= root.val;
  if (root.left === null && root.right === null && targetSum === 0) return true;

  return hwangHasPathSum(root.left, targetSum) || hwangHasPathSum(root.right, targetSum);
};
