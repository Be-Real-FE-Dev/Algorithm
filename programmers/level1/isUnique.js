const isUnique = str => {
  const map = new Map();

  for (let char of str){
    if (map.has(char)){
      return false;
    }

    map.set(char, true)
  }
  return true;
} 