// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLowestCommonAncestor = function (root, p, q) {
  return hwangDfs(root, p, q);
};

function hwangDfs(node, p, q) {
  if (!node) return null;

  if (node.val < p.val && node.val < q.val) return hwangDfs(node.right, p, q);
  if (node.val > p.val && node.val > q.val) return hwangDfs(node.left, p, q);

  return node;
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
