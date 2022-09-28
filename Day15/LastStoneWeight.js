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
