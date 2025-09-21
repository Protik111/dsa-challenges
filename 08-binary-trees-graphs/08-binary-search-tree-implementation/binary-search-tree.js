class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      const currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          //If there’s already a node at .left, you move down:
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          //If .right is occupied, you move down:
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return null;
  }

  //with private method
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }
  //with private method
  _removeNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // Case 1: No child
      if (!node.left && !node.right) {
        return null;
      }
      // Case 2: One child
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      // Case 3: Two children
      let minRight = this._findMin(node.right);
      node.value = minRight.value;
      node.right = this._removeNode(node.right, minRight.value);
      return node;
    }
  }

  //with private method
  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  _printNode(node) {
    if (node === null) {
      return;
    }

    this._printNode(node.left);
    console.log(node.value);
    this._printNode(node.right);
  }

  printTree() {
    this._printNode(this.root);
  }
}

module.exports = { Node, BinarySearchTree };
