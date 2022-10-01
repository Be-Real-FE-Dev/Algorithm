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

choiGenerateMatrix(3);
