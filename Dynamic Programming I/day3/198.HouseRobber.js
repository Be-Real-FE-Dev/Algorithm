var kimRob1 = function(nums) {
     let prev = 0;
   let current = 0;
   let temp;

   for(let i of nums){
       temp = current;
       current = Math.max(prev + i, current)
       prev = temp;
   }
   return current;
  };

console.log(kimRob1([2,1,1,2]))
