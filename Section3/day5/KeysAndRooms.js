// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangCanVisitAllRooms = function (rooms) {
  const room = new Array(rooms.length).fill(0);
  const q = [0];

  while (q.length) {
    const idx = q.shift();

    if (idx && room[idx]) continue;
    room[idx] += 1;
    const keys = rooms[idx];
    keys.forEach(key => {
      if (key !== idx) {
        q.push(key);
      }
    });
  }

  return room.filter(r => r > 0).length === rooms.length;
};
