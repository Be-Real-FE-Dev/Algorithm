//* 최원오 -----------------------------------------------------------------------------

const choiIsValidBST = function (root, min, max) {
  if (root == null) return true;
  if (min != null && root.val <= min) return false;
  if (max != null && root.val >= max) return false;

  return choiIsValidBST(root.left, min, root.val) && choiIsValidBST(root.right, root.val, max);
};
