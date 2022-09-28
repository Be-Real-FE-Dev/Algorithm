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
