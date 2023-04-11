function solution(n, m) {
  const gcd =(a, b) => a % b === 0 ? b : gcd(b, a % b); //최대공약수
  const lcm = (a, b) => a * b / gcd(a, b); // 최소 공배수
  return [gcd(n, m), lcm(n, m)]
}