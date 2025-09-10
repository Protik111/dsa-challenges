class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//      a
//     / \
//    b   c
//   / \
//  d   e

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const leftNode = maxDepth(root.left);
  const rightNode = maxRight(root.right);

  return Math.max(leftNode, rightNode) + 1;
}

//with BFS
function maxDepthBFS(root) {
  if (!root) {
    return 0;
  }

  const depth = 0;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (current.left) queue.push(current.left);
      if (current.right) queue.right(current.right);
    }

    depth++;
  }

  return depth;
}

module.exports = {
  maxDepth,
  Node,
};
