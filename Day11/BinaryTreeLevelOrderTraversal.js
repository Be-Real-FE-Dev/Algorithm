/**
 * * Park *****************************************
 * @param {TreeNode} root
 * @return {number[][]}
 */
const parkLevelOrder = root => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const subArr = [];
    const { length } = queue;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      subArr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(subArr);
  }
  return result;
};
