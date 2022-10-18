// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFindSmallestSetOfVertices = function (n, edges) {
  const connections = new Array(n).fill(0);
  const result = [];

  edges.forEach(([_, to]) => {
    connections[to] += 1;
  });
  connections.forEach((c, idx) => (c === 0 ? result.push(idx) : ''));

  return result;
};
