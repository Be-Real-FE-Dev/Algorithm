//* 최원오 -----------------------------------------------------------------------------

const choiInsertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val > val) {
    root.left = choiInsertIntoBST(root.left, val);
  } else {
    root.right = choiInsertIntoBST(root.right, val);
  }

  return root;
};
