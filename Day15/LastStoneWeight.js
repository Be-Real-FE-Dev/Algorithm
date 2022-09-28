
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    const y = stones.shift();
    const x = stones.shift();

    if (y !== x) stones.push(y - x);
  }

  return stones.length ? stones[0] : 0;
}

//* 최원오 -----------------------------------------------------------------------------

const choiLastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    if (stones[0] === stones[1]) {
      stones.splice(0, 2);
    } else {
      stones.splice(0, 2, stones[0] - stones[1]);
      stones.sort((a, b) => b - a);
    }
  }
  return stones.length === 0 ? 0 : stones[0];
}
/**
 * * Park ************************************************
 * @param {number[]} stones
 * @return {number}
 */
const parkLastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);

    const one = stones.pop();
    const two = stones.pop();

    if (one > two) {
      stones.push(one - two);
    }
  }
  return stones;
};
