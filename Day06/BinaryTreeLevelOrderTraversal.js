/**
 * * ************************* Park's Code *************************
 * @param {TreeNode} root
 * @return {number[][]}
 */

const bfs = (node, level, result) => {
  if (!node) return null;

  if (!result[level]) result[level] = [node.val];
  else result[level].push(node.val);
  bfs(node.left, level + 1, result);
  bfs(node.right, level + 1, result);
};

const parkLevelOrder = root => {
  const result = [];
  bfs(root, 0, result);
  return result;
};
