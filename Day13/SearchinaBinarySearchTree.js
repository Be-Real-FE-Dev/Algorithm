// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;
  if (val < root.val) return hwangSearchBST(root.left, val);
  if (val > root.val) return hwangSearchBST(root.right, val);
};
