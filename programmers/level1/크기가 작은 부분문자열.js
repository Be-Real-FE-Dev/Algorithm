function solution(t, p) {
  const arr = [];
  const length = p.length;
  
  for (let i = 0; i < t.length - length + 1; i++){
      const num = t.slice(i, i + length);
      
      if (+p >= +num) arr.push(num);
  }
  
  return arr.length;
}