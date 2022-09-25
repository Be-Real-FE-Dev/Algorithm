//* 최원오 -----------------------------------------------------------------------------

const choiIsSymmetric = function (root) {
  const answer = [];

  if (!root) return true;

  const DFS = (node, level) => {
    if (node === null) {
      if (!answer[level]) answer[level] = [null];
      else answer[level].push(null);
      return answer;
    }

    if (!answer[level]) answer[level] = [node.val];
    else answer[level].push(node.val);

    DFS(node.left, level + 1);
    DFS(node.right, level + 1);
  };

  DFS(root, 0);

  for (let i = 1; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      const pointArr = answer[i];
      if (pointArr[j] !== pointArr[pointArr.length - j - 1]) return false;
    }
  }

  return true;
};
