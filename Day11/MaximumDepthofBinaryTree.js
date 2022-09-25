//* 최원오 -----------------------------------------------------------------------------

const choiMaxDepth = function (root) {
  const answer = [];

  if (!root) return 0;

  const DFS = (node, level) => {
    if (!node) return answer;

    if (!answer[level]) answer[level] = [node.val];
    else answer[level].push(node.val);

    DFS(node.left, level + 1);
    DFS(node.right, level + 1);
  };

  DFS(root, 0);

  return answer.length;
};
