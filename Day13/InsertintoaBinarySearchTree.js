/**
 * * Park *************************************************
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const parkInsertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (root.val > val) {
    root.left = parkInsertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = parkInsertIntoBST(root.right, val);
  }
  return root;
};
