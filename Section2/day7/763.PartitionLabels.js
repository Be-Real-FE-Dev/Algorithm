// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangPartitionLabels1 = function (s) {
  let lastIdx = 0;
  let start = 0;
  let end = 0;
  const result = [];

  while (start < s.length) {
    const str = s[end];
    lastIdx = Math.max(lastIdx, s.lastIndexOf(str));

    if (lastIdx === end) {
      const lastResult = result.length > 0 ? result.reduce((a, b) => a + b, 0) : 0;
      result.push(lastIdx + 1 - lastResult);
      start = lastIdx + 1;
      end = lastIdx + 1;
    } else end += 1;
  }

  return result;
};

// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangPartitionLabels2 = function (s) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  let lastIndex = 0;
  let lastValue = 0;
  let lastPart = 0;

  for (let i = 0; i < s.length; i++) {
    lastIndex = map.get(s[i]);
    if (lastIndex > lastValue) lastValue = lastIndex;
    if (lastValue === i) {
      result.push(lastValue + 1 - lastPart);
      lastPart = lastValue + 1;
    }
  }

  return result;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
