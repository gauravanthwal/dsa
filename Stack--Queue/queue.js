// If you want to see documentation
// see the Stack file instead this one
//  there are so many thing I have write about
//  different different implementation of stack and queues

//******************************************************************************* */
//                                 1. WITH ARRAY
//******************************************************************************* */

// You can use with Array it is very easy

const q = [];
q.push("first");
q.push("second");
q.push("third");

// q = ['first', 'second', 'third']  pop is not gonna work

q.shift(); // removed first
q.shift(); // removed second
q.shift(); // removed third

// q = []

// Note --> It is not ideal for creating Queues with array

//******************************************************************************* */
//                                 2. WITH LINKEDLIST
//******************************************************************************* */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Add to the end
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last  = newNode;
    }
    this.length++;
    return this.length;
  }

  // Removing from the starting
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }

    this.first = temp.next;
    temp.next = null;

    this.length--;
    return temp.val;
  }
}

const list = new Queue();
list.enqueue("1");
