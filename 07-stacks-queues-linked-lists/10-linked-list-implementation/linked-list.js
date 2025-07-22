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

  printAll() {
    let current = this.next;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  get(index) {
    let current = this.head;
    let i = 0;

    while (i < current) {
      current = current.next;
      i++;
    }

    return current.data;
  }
}

module.exports = { Node, LinkedList };
