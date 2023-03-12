function solution(k, m, score) {
  let answer = 0;
  const sortedScore = [...score].sort((a, b) => a - b).slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
      answer += sortedScore[i] * m;
  }
  return answer;
}