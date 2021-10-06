//******************************************************************************* */
//                                 1. WITH ARRAY
//******************************************************************************* */

// LIFO --> Last In First Out
// We can perform stack data structure with javascript in multiple ways
// Like we can use js built in mehod
// 1.  array.push(val)  && array.pop()
//  It will add an element at the end of the array and remove item from the last index.

// 2.  array.unshift(val) && array.shift().
//  It will add an item at the beggining of the array and remove item from the beggining.

// Note --> adding item in starting of the array
// is bad thing because it will shift all the index with +1.
// Conclusion --> push & pop is better option to perform stack in arrays

//******************************************************************************* */
//                                 2. WITH LINKEDLIST
//******************************************************************************* */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Add new Item in the **Starting** of the linked list
  // because adding element at the end take constant time in linkedlist but O(1)
  // but removing item from the end of the linkedlist take lots of time  O(n) bcause of traversing
  // Note --> so we are using shift and unshift concept even though naming will be push & pop
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this.length;
  }

  //  Remove Item from end of the linkedlist
  pop() {
    if (!this.first) return null;
    let currentFirst = this.first;

    if (this.first == this.last) {
      this.last = null;
    }
    this.first = currentFirst.next;
    currentFirst.next = null;

    this.length--;
    return currentFirst.val;
  }
}

const list = new Stack();