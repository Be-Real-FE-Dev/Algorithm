
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
