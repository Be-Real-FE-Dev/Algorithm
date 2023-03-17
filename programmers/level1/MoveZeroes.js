const moveZeroes = (nums) => {
  let j = 0;

  for (let i=0; i < nums.length; i++){
    if (nums[i] !== 0){
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;

      j++;
    }
  }

  return nums;
}

console.log(moveZeroes([1,2,0,12,0,1,2]));