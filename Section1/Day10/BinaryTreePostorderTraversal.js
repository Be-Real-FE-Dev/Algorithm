// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPostorderTraversal = function (root) {
  const postOrder = (r, arr) => {
    if (!r) return [];

    postOrder(r.left, arr);
    postOrder(r.right, arr);
    arr.push(r.val);
    return arr;
  };

  return postOrder(root, []);
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

/**
 * * Park ************************************************************************
 * @param {TreeNode} root
 * @return {number[]}
 */
const parkPostorderTraversal = function (root) {
  if (!root) return [];

  return [...parkPostorderTraversal(root.left), ...parkPostorderTraversal(root.right), root.val];
};
