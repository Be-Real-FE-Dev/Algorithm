//* 최원오 -----------------------------------------------------------------------------

const choiFindTheWinner = function (n, k) {
  let point = 0;
  const players = Array(n)
    .fill('')
    .map((_, i) => i + 1);

  while (players.length > 1) {
    point += k - 1;

    if (point >= players.length) {
      point %= players.length;
    }

    players.splice(point, 1);
  }

  return players[0];
};
