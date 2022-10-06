//* 최원오 -----------------------------------------------------------------------------

const choiFloodFill = function (image, sr, sc, newColor) {
  const startingColor = image[sr][sc];
  image[sr][sc] = newColor;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const helper = (sr, sc) => {
    for (const direction of directions) {
      const row = sr + direction[0];
      const col = sc + direction[1];
      if (
        row >= 0 &&
        row < image.length &&
        col >= 0 &&
        col < image[row].length &&
        image[row][col] === startingColor &&
        image[row][col] !== newColor
      ) {
        image[row][col] = newColor;
        helper(row, col);
      }
    }
  };

  helper(sr, sc);
  return image;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFloodFill = function (image, sr, sc, color) {
  const DIR = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const q = [];
  q.push([sr, sc]);
  const curColor = image[sr][sc];

  while (q.length) {
    const [y, x] = q.shift();

    if (y < 0 || y >= image.length || x < 0 || x >= image[0].length) continue;
    if (image[y][x] !== curColor || image[y][x] === color) continue;

    image[y][x] = color;

    for (let i = 0; i < DIR.length; i++) {
      const [dy, dx] = DIR[i];
      q.push([y + dy, x + dx]);
    }
  }

  return image;
};
