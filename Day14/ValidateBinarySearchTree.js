// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsValidBST = function (root) {
  return hwangBst(root, null, null);
};

function hwangBst(node, min, max) {
  if (node === null) return true;

  if ((min !== null && min >= node.val) || (max !== null && max <= node.val)) return false;

  return bst(node.right, node.val, max) && bst(node.left, min, node.val);
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
