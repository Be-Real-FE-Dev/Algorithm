// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsValid = function(s) {
  let stack = [];
  
  for(let i = 0; i < s.length; i++){
      let mark = s[i];
      
      switch(mark){
          case '(':
              stack.push('(');
              break;
          case ')':
              if(stack.length && stack[stack.length - 1] === '('){
                  stack.pop();
              } else return false;
              
              break;
          case '[':
              stack.push('[');
              break;
          case ']':
              if(stack.length && stack[stack.length - 1] === '['){
                  stack.pop();
              } else return false;
              break;
          case '{':
              stack.push('{');
              break;
          case '}':
              if(stack.length && stack[stack.length - 1] === '{'){
                  stack.pop();
              } else return false;
              
              break;
      }
  }
  
  if(stack.length) return false;
  
  return true;
};