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
