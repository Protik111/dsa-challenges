class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode; //newNode = { data: 10, next: null, prev: null }
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }
}

module.exports = DoublyLinkedList;
