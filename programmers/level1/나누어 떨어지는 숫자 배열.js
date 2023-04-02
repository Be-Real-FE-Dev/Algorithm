function solution(arr, divisor) {
  const answer = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
  
  return answer.length !== 0 ? answer : [-1];
}