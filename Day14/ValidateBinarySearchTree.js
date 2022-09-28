
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsValidBST = function (root) {
  return hwangBst(root, null, null);
};

function hwangBst(node, min, max) {
  if (node === null) return true;

  if ((min !== null && min >= node.val) || (max !== null && max <= node.val)) return false;

  return bst(node.right, node.val, max) && bst(node.left, min, node.val);
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//


//* 최원오 -----------------------------------------------------------------------------

const choiIsValidBST = function (root, min, max) {
  if (root == null) return true;
  if (min != null && root.val <= min) return false;
  if (max != null && root.val >= max) return false;

  return choiIsValidBST(root.left, min, root.val) && choiIsValidBST(root.right, root.val, max);

/**
 * * Park ******************************************************
 * @param {TreeNode} root
 * @return {boolean}
 */
const parkIsValidBST = function (root) {
  const traverse = (root, left, right) => {
    if (!root) return true;
    if (!(root.val > left && root.val < right)) return false;
    return traverse(root.left, left, root.val) && traverse(root.right, root.val, right);
  };

  return traverse(root, -Infinity, Infinity);

};

