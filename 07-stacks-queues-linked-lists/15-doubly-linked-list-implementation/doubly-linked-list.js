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

  insertAt(index, data) {
    if (index < 0 || this.length < index) return null;
    if (index === 0) return this.prepend(data);
    if (index === this.length) return this.append(data);

    let currentNode = this.head;
    const newNode = new Node(data);

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;

    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }

      // A <-> B <-> C <-> D
      currentNode.prev.next = currentNode.next; //This sets B’s next to point to D instead of C.
      currentNode.next.prev = currentNode.prev; //This sets D’s prev to point to B instead of C.
    }
  }

  contains(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }

    return false;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log("Data: ", current.data);
      current = current.next;
    }
  }
}

module.exports = DoublyLinkedList;
