// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPreorderTraversal = function (root) {
  const num = [];

  traversal(root, num);
  return num;
};

function traversal(node, arr) {
  if (node === null) return;

  arr.push(node.val);
  traversal(node.left, arr);
  traversal(node.right, arr);
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//

/**
 * * Park ******************************************************************************************
 * @param {TreeNode} root
 * @return {number[]}
 */
const parkPreorderTraversal = function (root) {
  if (!root) return [];

  return [root.val, ...parkPreorderTraversal(root.left), ...parkPreorderTraversal(root.right)];
};
