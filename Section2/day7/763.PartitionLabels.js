/**
 * * Park ************************************
 * @param {string} s
 * @return {number[]}
 */
const parkPartitionLabels = function (s) {
  const map = new Map();
  const result = [];

  let partitionLast = -1;
  let partitionLength = 0;

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    partitionLength++;
    const curLast = map.get(s[i]);
    if (curLast > partitionLast) {
      partitionLast = curLast;
    }
    if (partitionLast === i) {
      result.push(partitionLength);
      partitionLength = 0;
    }
  }

  return result;
};
