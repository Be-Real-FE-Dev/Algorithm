/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const parkTwoSum = (nums, target) => {
  const map = new Map();
  let res;

  nums.forEach((el, index) => {
    const rest = target - el;

    if (map.get(rest) !== undefined) {
      res = [map.get(rest), index];
    }
    map.set(el, index);
  });
  return res;
};
