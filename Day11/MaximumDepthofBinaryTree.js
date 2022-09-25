
/**
 * * Park *********************************************************************************
 * @param {number[]} cost
 * @return {number}
 */
const parkMinCostClimbingStairs = function (cost) {
  let [prev, cur] = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    [prev, cur] = [cur, Math.min(prev, cur) + cost[i]];
  }
  return Math.min(prev, cur);
};

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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMaxDepth = function (root) {
  if (!root) return 0;

  let level = 0;
  const q = [root];

  while (q.length) {
    const len = q.length;
    level += 1;

    for (let i = 0; i < len; i++) {
      const node = q.shift();

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return level;
};
