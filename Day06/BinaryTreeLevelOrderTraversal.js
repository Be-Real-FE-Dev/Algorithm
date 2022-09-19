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
};