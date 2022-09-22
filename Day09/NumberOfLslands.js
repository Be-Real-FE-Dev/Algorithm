// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangNumIslands = function(grid) {
  let num = 0;
  
  let end = [grid.length, grid[0].length];
 
  
  const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
  ]
  
  const q = [];
  
  while(true){
      if(!q.length) {
          const s = findStart(grid);
          
          if(s === -1) break;
          else {
              num += 1;
              q.push(s)
          }
      }
      const [y, x] = q.shift();
      
      if(x < 0 || x >= end[1] || y < 0 || y >= end[0]) continue;
      if(grid[y][x] === '0') continue;
      
      grid[y][x] = '0';  
      
      for(let i = 0; i < dir.length; i++){
          const [dy, dx] = dir[i];
          
          q.push([y + dy, x + dx])
      }
  }
  
  return num
};


function findStart(grid){ 
  for(let i = 0; i < grid.length; i++){       
      for(let j = 0; j < grid[i].length; j++){
          if(grid[i][j] === '1'){
              return [i, j];
          }
      }
  }
  
  return -1;
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
