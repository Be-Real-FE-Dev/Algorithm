const checkPermutation = (strA, strB) => {
  if (strA.length !== strB.length) return false;

  const map = new Map();

  for (let char of strA){
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }

  for (let char of strB){
    if (map.get(char) && map.get(char) !== 0){
      map.set(char, map.get(char) -1);
    } else {
      return false;
    }
  }

  return true;
}