// Node class to represent a node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Doubly linked list class
class DoublyLinkedList {
  constructor() {
    this.head = null; // First node
    this.tail = null; // Last node
    this.length = 0; // Number of nodes
  }

  // Add to the end
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add to the beginning
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

  // Insert at a specific index
  insertAt(index, data) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.prepend(data);
    if (index === this.length) return this.append(data);

    const newNode = new Node(data);
    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;

    this.length++;
  }

  // Get node by index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // Remove node by index
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
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }

    this.length--;
  }

  // Check if data exists
  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // Print all nodes
  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = DoublyLinkedList;
