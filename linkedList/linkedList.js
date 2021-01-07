// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    //this.head arg would be "next" as in constructor Node class
    const node = new Node(data, this.head);
    this.head = node;
  }

  //tells how many nodes are in the linked list
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}

module.exports = { Node, LinkedList };
