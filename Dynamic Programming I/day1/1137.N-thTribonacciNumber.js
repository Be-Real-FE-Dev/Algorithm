/* eslint-disable prefer-destructuring */
//* 정세훈 시작 ----------------------------------------------------------------------------------------------------------------------------------
// const jeongTribonacci = function (n) {
//   if (n === 0) return 0;
//   if (n <= 2) return 1;
//   return jeongTribonacci(n - 1) + jeongTribonacci(n - 2) + jeongTribonacci(n - 3);
// };
const jeongTribonacci = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  const F = [0, 1, 1];

  let F3;

  for (let i = 3; i <= n; i++) {
    F3 = F[0] + F[1] + F[2];
    F[0] = F[1];
    F[1] = F[2];
    F[2] = F3;
  }

  return F3;
};
// console.log(jeongTribonacci(25));
//* 정세훈 끝 ----------------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number} n
 * @return {number}
 */
const park_tribonacci = function (n) {
  function* dp(n) {
    const cache = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
    }
    yield cache[n];
  }

  return dp(n).next().value;
};
