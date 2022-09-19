//* 최원오 -----------------------------------------------------------------------------

var preorder = function(root, answer=[]) { // 파라미터 추가로 빈 배열을 세팅한다.
  if (!root) return answer; // 재귀 탈출 
  
  answer.push(root.val); //트리를 타고 내려가면서 value를 푸시한다.
  
  root.children.forEach(child => preorder(child, answer)); // 현 기준의 자식트리로 재귀를 돌린다.
  
  return answer; // 최종적으로 나오는 반환 값은 재귀를 다돌고 나온 배열
};