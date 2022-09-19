/**
 * * ************************* Park's Code *************************
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

const parkPreorder = root => {
  if (!root) return [];
  return [root.val, ...root.children.flatMap(node => preorder(node))];
};
