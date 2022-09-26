/**
 * * Park *****************************************************************
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const parkSearchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  if (val < root.val) return parkSearchBST(root.left, val);
  return parkSearchBST(root.right, val);
};
