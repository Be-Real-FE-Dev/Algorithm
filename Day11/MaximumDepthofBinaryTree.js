// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMaxDepth = function(root) {
  if(!root) return 0;
  
  let level = 0;
  let q = [root];
  
  while(q.length){
      let len = q.length;
      level += 1;
      
      for(let i = 0; i < len; i++){
          let node = q.shift();
          
          if(node.left) q.push(node.left);
          if(node.right) q.push(node.right);

      }
  }
  
  return level;
};