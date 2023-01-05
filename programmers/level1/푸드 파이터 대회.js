function solution(food) {
  let answer = 0;
  
  for (let i = food.length - 1; i > 0; i--){
    const repeatNum = i.toString().repeat(Math.floor(food[i] / 2));
    
    answer = repeatNum + answer + repeatNum; 
  }
  return answer;
}