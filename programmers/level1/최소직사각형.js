function solution(sizes) {
  const newSizes = sizes.map(arr => arr.sort((a,b) => a - b));
  
  const maxW = Math.max(...newSizes.map(arr => arr[0]));
  const maxH = Math.max(...newSizes.map(arr => arr[1]));
  
  return maxW * maxH;
}