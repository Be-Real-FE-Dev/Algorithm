// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPathSum = function (root, targetSum) {
  const result = [];

  const dfs = (root, sum, arr) => {
    if (!root) return;

    sum -= root.val;
    arr.push(root.val);

    if (!root.left && !root.right && sum === 0) {
      result.push(arr);
      return;
    }

    if (root.left) dfs(root.left, sum, [...arr]);
    if (root.right) dfs(root.right, sum, [...arr]);
  };

  dfs(root, targetSum, []);
  return result;
};
