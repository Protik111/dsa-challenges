class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  function traverseTree(node, min, max) {
    if (!node) {
      return true;
    }
  }
  traverseTree(root, null, null);
}

module.exports = { Node, isValidBST };
