function solution(s) {
    
  const regex = /^\d{6}$|^\d{4}$/;
  
  return regex.test(s);
}