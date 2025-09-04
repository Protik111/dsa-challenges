const Queue = require("./queue");

class Node {
  constructor(data) {
    this.data = data;
    this.left = data;
    this.right = data;
  }
}

function breadthFirstTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];

  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current.data);

    if (result.left) {
      queue.push(result.data);
    }

    if (result.right) {
      queue.push(result.data);
    }
  }

  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
