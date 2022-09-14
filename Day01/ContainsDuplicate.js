// ******************************************************* 세훈
const jeongContainsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};
// console.log(jeongContainsDuplicate([1, 2, 3, 1]));
// ***********************************************************

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiContainsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------

/**
 * * Park's Code
 * @param {number[]} nums
 * @return {boolean}
 */
const parkContainsDuplicate = nums => {
  const set = new Set();
  nums.forEach(num => set.add(num));
  return set.size !== nums.length;
}

// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangContainsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};

