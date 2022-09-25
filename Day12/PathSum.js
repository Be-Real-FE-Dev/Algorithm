/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const parkHasPathSum = function (root, targetSum) {
  if (!root) return false;

  const result = [];

  const dfs = (node, sum) => {
    if (!node.left && !node.right) return result.push(sum + node.val);

    if (node.left) dfs(node.left, sum + node.val);
    if (node.right) dfs(node.right, sum + node.val);
  };

  dfs(root, 0);

  return result.includes(targetSum);
};
