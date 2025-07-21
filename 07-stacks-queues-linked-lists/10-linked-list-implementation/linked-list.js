class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node; // We’ve linked the new node, but tail still points to 20
    }

    this.tail = node; // Now tail points to the correct last node.
  }
}

module.exports = { Node, LinkedList };
