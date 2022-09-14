//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiPivotIndex = function (nums) {
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    const rightSum = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0);

    if (leftSum === rightSum) {
      result = i;
      break;
    }
  }

  return result;
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------
