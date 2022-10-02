//* 최원오 -----------------------------------------------------------------------------

const choiGenerateMatrix = function (n) {
  // const result = Array(n).fill([]); // 이건 왜 안돼?
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }

  let length = n;
  let direction = 1;
  let num = 0;
  let x = -1;
  let y = 0;

  while (length !== 0) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length -= 1;

    for (let i = 0; i < length; i++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }
  console.log(result);
  return result;
};

// choiGenerateMatrix(3);

/**
 * @param {number} n
 * @return {number[][]}
 */
const parkGenerateMatrix = function (n) {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let dirIndex = 0;
  let row = 0;
  let cal = 0;

  for (let i = 0; i < n * n; i++) {
    matrix[row][cal] = i + 1;
    const _row = row + dir[dirIndex][0];
    const _cal = cal + dir[dirIndex][1];

    if (matrix[_row] === undefined || matrix[_row][_cal] === undefined || matrix[_row][_cal] !== 0) {
      dirIndex = (dirIndex + 1) % 4;
    }
    row += dir[dirIndex][0];
    cal += dir[dirIndex][1];
  }
  return matrix;
};
