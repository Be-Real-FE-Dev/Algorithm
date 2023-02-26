function permutate(arr){
  const result = [];

  const dfs = (i, arr) => {
    if (i === arr.length){
      console.log(arr)
      return result.push([...arr])
    }

    for (let j = i; j < arr.length; j++){
      [arr[i], arr[j]] = [arr[j], arr[i]]
      
      dfs(i + 1, arr);
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  dfs(0, arr);

  return result;
}

console.log(permutate(['a','b','c', 'd']))