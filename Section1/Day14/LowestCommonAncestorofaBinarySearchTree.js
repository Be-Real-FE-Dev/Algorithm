
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


//* 최원오 -----------------------------------------------------------------------------

const choiLowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val) return choiLowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return choiLowestCommonAncestor(root.right, p, q);

/**
 * * Park ********************************************************************************
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const parkLowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);

  return root;
};

