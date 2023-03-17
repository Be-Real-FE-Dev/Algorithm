/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const result = [];
  const level = 0;

  function traverse(root, level) {
    if (!root) return;

    if (level >= result.length) result[level] = [];

    result[level].push(root.val);

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  }

  traverse(root, level);

  return result;
};
