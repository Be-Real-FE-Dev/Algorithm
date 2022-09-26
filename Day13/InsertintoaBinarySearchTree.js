/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
