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

  insertAt(index, data) {
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      const node = new Node(data);
      node.next = current;
      previous.next = node;
    }
  }
}

module.exports = { Node, LinkedList };
