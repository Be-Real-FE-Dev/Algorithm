/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root, result = []) {
  if (!root) return result;

  result.push(root.val);

  for (const node of root.children || []) {
    preorder(node, result);
  }

  return result;
};
