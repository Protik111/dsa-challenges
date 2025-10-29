const Stack = require("./stack");

function depthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  let visited = {};

  let stack = new Stack();

  let result = [];

  stack.push(startingVertex);

  visited[startingVertex] = true;

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
  }
}

module.exports = depthFirstTraversal;
