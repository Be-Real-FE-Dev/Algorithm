/**
 * * Park **************************************************
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const parkKindKthPositive = function (arr, k) {
  const restArr = [];

  let i = 1;
  while (restArr.length < k) {
    if (!arr.includes(i)) restArr.push(i);
    i++;
  }
  return restArr[restArr.length - 1];
};
