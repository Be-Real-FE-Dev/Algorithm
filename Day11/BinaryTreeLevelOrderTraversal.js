// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLevelOrder = function(root) {
  if(!root) return [];
  
  let nodes = [];
  let q = [root];
  
  while(q.length){
      let len = q.length;
      let subNodes = [];
      
      for(let i = 0; i < len; i++){
          let node = q.shift();
          subNodes.push(node.val);
          if(node.left) q.push(node.left)
          if(node.right) q.push(node.right)
      }
      
      nodes.push(subNodes);
  }
  
  return nodes
};
