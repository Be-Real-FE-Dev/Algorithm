/**
 * * ************************* Park's Code *************************
 * @param {TreeNode} root
 * @return {boolean}
 */
const parkIsValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
