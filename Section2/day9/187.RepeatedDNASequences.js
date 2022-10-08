//* 최원오 -----------------------------------------------------------------------------

const choiFindRepeatedDnaSequences = function (s) {
  const map = new Map();
  const answer = [];

  for (let i = 0; i <= s.length - 10; i++) {
    const seq = s.slice(i, i + 10);

    if (map.has(seq)) {
      map.set(seq, map.get(seq) + 1);
    } else {
      map.set(seq, 1);
    }
  }

  map.forEach((count, seq) => {
    if (count > 1) answer.push(seq);
  });

  return answer;
};
