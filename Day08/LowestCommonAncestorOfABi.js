/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const parkLowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);

  return root;
};
