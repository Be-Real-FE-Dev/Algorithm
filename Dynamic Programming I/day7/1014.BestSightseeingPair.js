//* doeun 1----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxScoreSightseeingPair1 = function(values) {
  let max = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < values.length; i++){
      for(let j = i + 1; j < values.length; j++){
          const val = values[i] + values[j] + i - j;

          max = Math.max(max, val);
      }
  }

  return max
};
//* doeun 2----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxScoreSightseeingPair2 = function(values) {  
  let res = 0;
  let start = values[0];

  for(let i = 1; i < values.length; i++){
      res = Math.max(res, values[i] - i + start);

      if(start < values[i] + i){
          start = values[i] + i;
      }
  }

  return res;
};