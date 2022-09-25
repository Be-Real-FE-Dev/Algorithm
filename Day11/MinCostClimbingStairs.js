/**
 * @param {TreeNode} root
 * @return {number}
 */
const parkMaxDepth = function (root) {
  if (!root) return 0;

  const leftMaxDepth = 1 + maxDepth(root.left);
  const rightMaxDepth = 1 + maxDepth(root.right);

  return Math.max(leftMaxDepth, rightMaxDepth);
};
