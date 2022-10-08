// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFindRepeatedDnaSequences = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length - 9; i++) {
    const str = s.slice(i, i + 10);
    if (map.has(str)) map.set(str, map.get(str) + 1);
    else map.set(str, 0);
  }

  return [...map].reduce((acc, cur) => {
    const [key, val] = cur;
    if (val >= 1) acc.push(key);

    return acc;
  }, []);
};
