/**
 * * Park ************************************************
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const parkLowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!right) return left;
  if (!left) return right;

  return root;
}

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left ? (right ? root : left) : right;
};
