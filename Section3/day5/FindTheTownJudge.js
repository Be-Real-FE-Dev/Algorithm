// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangFindJudge1 = function (n, trust) {
  if (n === 1) return 1;
  if (n === [...new Set(trust.map(([people, _]) => people))].length) return -1;

  const map = new Map();

  for (let i = 0; i < trust.length; i++) {
    const [people, judge] = trust[i];

    if (map.has(judge)) map.set(judge, [...new Set(map.get(judge)), people]);
    else map.set(judge, [people]);
  }

  for (const [key, value] of map) {
    if (value.length === n - 1) return key;
  }

  return -1;
};

// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangFindJudge1 = function (n, trust) {
  const arr = new Array(n + 1).fill(0);

  for (let i = 0; i < trust.length; i++) {
    const [people, judge] = trust[i];

    arr[people] -= 1;
    arr[judge] += 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === n - 1) return i;
  }

  return -1;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

/**
 * * Park ***************************************************************************
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var parkFindJudge = function (n, trust) {
  const citizen = Array(n).fill(0);

  for (let i = 0; i < trust.length; i++) {
    citizen[trust[i][0] - 1] -= 1;
    citizen[trust[i][1] - 1] += 1;
  }

  for (let i = 0; i < citizen.length; i++) {
    if (citizen[i] === n - 1) return i + 1;
  }
  return -1;
};
