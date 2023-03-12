function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === 'p') return acc + 1;
    else if (cur === 'y') return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
