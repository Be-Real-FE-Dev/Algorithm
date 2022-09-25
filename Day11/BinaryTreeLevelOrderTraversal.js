//* 최원오 -----------------------------------------------------------------------------

const choiLevelOrder = function (root) {
  const answer = [];

  if (!root) return answer;

  const DFS = (node, depth) => {
    // 현재 노드와 depth를 설정
    if (!node) return answer;

    if (!answer[depth]) {
      answer[depth] = [node.val]; // depth의 배열이 비어있으면 노드의 val로 하고
    } else {
      answer[depth].push(node.val); // 배열에 값이 있으면 푸시로 추가한다.
    }

    DFS(node.left, depth + 1); // depth를 더한 후 재귀
    DFS(node.right, depth + 1);
  };

  DFS(root, 0);

  return answer;
};
