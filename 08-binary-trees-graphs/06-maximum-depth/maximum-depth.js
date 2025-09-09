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

module.exports = {
  maxDepth,
  Node,
};
