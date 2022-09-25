/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const leftNodeTraverse = node => {
  if (!node) return [];
  return [node.val, ...leftNodeTraverse(node.left), ...leftNodeTraverse(node.right)];
};

const rightNodeTraverse = node => {
  if (!node) return [];
  return [node.val, ...rightNodeTraverse(node.right), ...rightNodeTraverse(node.left)];
};

const parkIsSymmetric = function (root) {
  if (!root) return false;
  const leftTree = leftNodeTraverse(root.left);
  const rightTree = rightNodeTraverse(root.right);

  if (leftTree.length !== rightTree.length) return false;

  for (let i = 0; i < leftTree.length; i++) {
    if (leftTree[i] !== rightTree[i]) return false;
  }

  return true;
};
