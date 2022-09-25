/**
 * * Park ********************************************************************************
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const parkInvertTree = function (root) {
  if (!root) return root;

  const tempTree = root.left;
  root.left = parkInvertTree(root.right);
  root.right = parkInvertTree(tempTree);

  return root;
};
