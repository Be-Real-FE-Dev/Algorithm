function solution(n) {
  const answer =  n.toString().split('').sort((a,b) => b-a ).join('')
    
  return +answer;
}