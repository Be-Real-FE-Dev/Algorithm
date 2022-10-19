
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangArrangeCoins = function (n) {
  let left = 0;
  let right = n;

  const sum = n => (n * (n + 1)) / 2;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sum(mid) === n) return mid;
    if (sum(mid) < n) left = mid + 1;
    else right = mid - 1;
  }

  return right;
}
// * wonoh -------------------------------------------------------

const choiArrangeCoins = function (n) {
  let start = 0;
  let end = n;
  let answer = 0;

  while (start <= end) {
    // start가 end보다 커지면 종료

    const mid = Math.floor((start + end) / 2); // n의 절반값을 구한다. 홀수 일시 내림
    const total = (mid * (mid + 1)) / 2; // 1 부터 n의 절반값 만큼 더한 값(가우스 공식)

    if (total === n) {
      // 더한 값이 n과 동일하면
      return mid;
    }
    if (total > n) {
      // 더한 값이 n 보다 크면 end를 줄이고 비교
      end = mid - 1;
    } else {
      // 더한 값이 n 보다 작으면 answer를 start값을 올리고 비교
      answer = mid; // start가 end보다 커져 반복문이 중단되면 ans를 출력하기 위해
      start = mid + 1;
    }
  }

  return answer;
};
