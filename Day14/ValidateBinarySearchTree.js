
//* 최원오 -----------------------------------------------------------------------------

const choiIsValidBST = function (root, min, max) {
  if (root == null) return true;
  if (min != null && root.val <= min) return false;
  if (max != null && root.val >= max) return false;

  return choiIsValidBST(root.left, min, root.val) && choiIsValidBST(root.right, root.val, max);

/**
 * * Park ******************************************************
 * @param {TreeNode} root
 * @return {boolean}
 */
const parkIsValidBST = function (root) {
  const traverse = (root, left, right) => {
    if (!root) return true;
    if (!(root.val > left && root.val < right)) return false;
    return traverse(root.left, left, root.val) && traverse(root.right, root.val, right);
  };

  return traverse(root, -Infinity, Infinity);

};
