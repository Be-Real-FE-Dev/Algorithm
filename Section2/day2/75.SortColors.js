
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSortColors1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
};

const hwangSortColors2 = function (nums) {
  let s = 0;
  let e = nums.length - 1;

  let i = 0;

  while (i <= e) {
    if (nums[i] === 0) {
      [nums[s], nums[i]] = [nums[i], nums[s]];
      s += 1;
      i += 1;
    } else if (nums[i] === 2) {
      [nums[e], nums[i]] = [nums[i], nums[e]];
      e -= 1;
    } else i += 1;
  }
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

/**
 * * Park *******************************************************
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const parkSortColors = function (nums) {
  nums.sort((a, b) => a - b);
};


// * joeun --------------------------------------------------------------------------------------------------------------------//

const leeSortColors = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let lazy = i;
        let fast = i + 1;
        
        while (fast < nums.length) {
            if (nums[lazy] > nums[fast]) {
                let temp = nums[lazy];
                nums[lazy] = nums[fast];
                nums[fast] = temp;
            } 
            if (nums[lazy] === nums[fast]) {
                let temp = nums[lazy+1];
                nums[lazy+1] = nums[fast];
                nums[fast] = temp;
            } 
            fast += 1;
        }
        
    }    
};