
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const leftNodeTraverse = node => {
  if (!node) return [];
  return [node.val, ...leftNodeTraverse(node.left), ...leftNodeTraverse(node.right)];
};

const rightNodeTraverse = node => {
  if (!node) return [];
  return [node.val, ...rightNodeTraverse(node.right), ...rightNodeTraverse(node.left)];
};

const parkIsSymmetric = function (root) {
  if (!root) return false;
  const leftTree = leftNodeTraverse(root.left);
  const rightTree = rightNodeTraverse(root.right);

  if (leftTree.length !== rightTree.length) return false;

  for (let i = 0; i < leftTree.length; i++) {
    if (leftTree[i] !== rightTree[i]) return false;
}

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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsSymmetric = function (root) {
  const q = [root];

  while (q.length) {
    const len = q.length;
    const nodes = [];

    for (let i = 0; i < len; i++) {
      const node = q.shift();

      if (!node) {
        nodes.push('null');
      } else {
        nodes.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }

    if (len === 1) continue;

    const mid = Math.floor(len / 2);
    if (nodes.slice(0, mid).join('') !== nodes.slice(mid).reverse().join('')) return false;
  }

  return true;
};
