// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    const y = stones.shift();
    const x = stones.shift();

    if (y !== x) stones.push(y - x);
  }

  return stones.length ? stones[0] : 0;
};
