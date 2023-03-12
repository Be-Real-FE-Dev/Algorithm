function solution(t, p) {
  let count = 0;
  const length = p.length;
  
  for (let i = 0; i < t.length - length + 1; i++){
      const num = t.slice(i, i + length);
      
      if (+p >= +num) count += 1;
  }
  
  return count;
}