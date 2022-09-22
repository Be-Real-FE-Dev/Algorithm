// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFloodFill = function(image, sr, sc, color) {
  let end = [image.length, image[0].length];
  let sameColor = image[sr][sc];
  const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
  ];
  let q = [];
  q.push([sr, sc]);
  
  while(q.length){
      const [y, x] = q.shift();
      
      if(x < 0 || x >= end[1] || y < 0 || y >= end[0]) continue;
      if(image[y][x] === color) continue;
      if(image[y][x] !== sameColor) continue;

      image[y][x] = color;
      for(let i = 0; i < dir.length; i++){
          const [dy, dx] = dir[i];
          
          q.push([y + dy, x + dx]);
      }
  }

  return image;
};