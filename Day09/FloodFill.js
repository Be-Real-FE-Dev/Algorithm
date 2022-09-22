/**
 * * Park's Code **************************************************
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const parkFloodFill = function (image, sr, sc, color) {
  const targetColor = image[sr][sc];
  const DIR = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const parkBfs = (queue, color, targetColor) => {
    while (queue.length) {
      const [sr, sc] = queue.shift();
      image[sr][sc] = color;

      DIR.forEach(dir => {
        const [x, y] = dir;
        const nx = sr + x;
        const ny = sc + y;

        if (nx >= 0 && ny >= 0 && nx < image.length && ny < image[sr].length) {
          if (image[nx][ny] === targetColor && image[nx][ny] !== color) {
            queue.push([nx, ny]);
          }
        }
      });
    }
  };

  parkBfs([[sr, sc]], color, targetColor);
  return image;
};

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
