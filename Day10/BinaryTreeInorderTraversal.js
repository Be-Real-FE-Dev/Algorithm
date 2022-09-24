// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangInorderTraversal = function (root) {
  const inorder = (r = root, arr) => {
    if (!r) return [];

    inorder(r.left, arr);
    arr.push(r.val);
    inorder(r.right, arr);
    return arr;
  };

  return inorder(root, []);
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

/**
 * * Park ******************************************************************************************
 * @param {TreeNode} root
 * @return {number[]}
 */
const parkInorderTraversal = function (root) {
  if (!root) return [];

  return [...parkInorderTraversal(root.left), root.val, ...parkInorderTraversal(root.right)];
};
