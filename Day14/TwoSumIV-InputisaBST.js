/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const parkFindTarget = function (root, k) {
  const map = new Map();

  const traverse = node => {
    if (!node) return false;
    const target = k - node.val;
    if (map.has(target)) return true;
    map.set(node.val, 1);

    return traverse(node.left) || traverse(node.right);
  };

  return traverse(root);
};
