// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsSymmetric = function(root) {
  let q = [root];
  
  while(q.length){
      let len = q.length;
      let nodes = []
      
      for(let i = 0; i < len; i++){
          let node = q.shift();
          
          if(!node){
              nodes.push('null');
          } else {
              nodes.push(node.val);
              q.push(node.left);
              q.push(node.right);
          }
          
      }
      
      if(len === 1) continue;

      const mid = Math.floor(len / 2);
      if(nodes.slice(0, mid).join('') !== nodes.slice(mid).reverse().join('')) return false;
  }
        
  return true;
};