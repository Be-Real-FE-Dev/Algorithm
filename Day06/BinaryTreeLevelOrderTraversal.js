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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLevelOrder = function(root) {
  if(!root) return [];
  
  let arr = []
  let q = [];
  
  q.push(root)
  
  while(q.length){
      let len = q.length;
      let child_arr = [];
      
      for(let i = 0; i < len; i++){
          child_arr.push(q[0].val);
          if(q[0].left !== null) q.push(q[0].left);
          if(q[0].right !== null) q.push(q[0].right);
          q.shift();
      }
  
      arr.push(child_arr)
  }
  
  return arr;
}

//* 최원오 실패 -----------------------------------------------------------------------------

const choiLevelOrder = function(root) {
  const answer = []; 
  
  if(!root) return answer;
  
  const DFS = (node, depth) => {  // 현재 노드와 depth를 설정
    if(!node) return answer; 

    if (!answer[depth]) { 
      answer[depth] = [node.val]; // depth의 배열이 비어있으면 노드의 val로 하고
    } else { 
      answer[depth].push(node.val); // 배열에 값이 있으면 푸시로 추가한다.
    }

    DFS(node.left, depth + 1); // depth를 더한 후 재귀
    DFS(node.right, depth + 1); 
  }
  
  DFS(root, 0);
  
  return answer;
};
