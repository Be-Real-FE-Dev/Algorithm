//* 최원오 -----------------------------------------------------------------------------

const choiLevelOrder = function (root) {
  const answer = [];

  if (!root) return answer;

  const DFS = (node, depth) => {
    if (!node) return answer;

    if (!answer[depth]) {
      answer[depth] = [node.val];
    } else {
      answer[depth].push(node.val);
    }

    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  };

  DFS(root, 0);

  return answer;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLevelOrder = function (root) {
  if (!root) return [];

  const nodes = [];
  const q = [root];

  while (q.length) {
    const len = q.length;
    const subNodes = [];

    for (let i = 0; i < len; i++) {
      const node = q.shift();
      subNodes.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    nodes.push(subNodes);
  }

  return nodes;
};
