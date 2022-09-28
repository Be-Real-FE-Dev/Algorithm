//* 최원오 -----------------------------------------------------------------------------

const choiFindTarget = function (root, k) {
  const arr = [];
  if (!root) return arr;

  const bfs = node => {
    if (!node) return arr;

    arr.push(node.val);
    bfs(node.left);
    bfs(node.right);

    return arr;
  };

  bfs(root);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
};
