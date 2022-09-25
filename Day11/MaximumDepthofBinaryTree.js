/**
 * * Park *********************************************************************************
 * @param {number[]} cost
 * @return {number}
 */
const parkMinCostClimbingStairs = function (cost) {
  let [prev, cur] = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    [prev, cur] = [cur, Math.min(prev, cur) + cost[i]];
  }
  return Math.min(prev, cur);
};
