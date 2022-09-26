// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangInsertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val);
  } else if (val < root.val) {
    root.left = hwangInsertIntoBST(root.left, val);
  } else if (val > root.val) {
    root.right = hwangInsertIntoBST(root.right, val);
  }

  return root;
};
