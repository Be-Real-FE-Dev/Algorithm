const stringCompression = (s) => {
  let out = [];
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next= s[i+1];

    if (current === next){
      count++
    } else {
      out.push(current + count);
      count = 1;
    }
  }

  return out.join('');
}

console.log(stringCompression('aabcccccaaa'))