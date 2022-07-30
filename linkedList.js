// Implement classes Node and Linked List
// Linked List (ordered data) like Array Structure

class Node {
  constructor(data, next) {
    this.head = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  // The unshift() method adds new elements to the beginning of an array.
  // The unshift() method overwrites the original array.
  unshift(data) {
    const newHead = new Node(data, this.head)
    this.length++
    this.head = newHead
  }
  getFirst() {
    return this.head
  }
  getLast() {
    let currentNode = this.head

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  clear() {
    this.head = null
    this.length = 0
  }
  shift() {
    // add this if codition becuase js cant do null.next
    if (!this.head) {
      return
    }

    const oldHead = this.head
    this.head = this.head.next
    this.length--
    return oldHead
  }
  pop() {
    // cant do null.next
    if (!this.head) {
      return
    }

    // add this because if linked list have only one node
    if (this.length === 1) {
      return this.shift()
    }
    const last = this.getLast()
    let current = this.head

    while (current.next !== last) {
      current = current.next
    }

    current.next = null
    this.length--
    return last
  }
  push(data) {
    // add to end of empty list
    if (!this.head) {
      return this.unshift(data)
    }

    const last = this.getLast()
    last.next = new Node(data, null)
    this.length++
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null
    }

    let counter = 0
    let current = this.head

    while (counter < index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, data) {
    if (!this.get(index)) {
      return false
    }

    const node = this.get(index)
    node.data = data
    return true
  }

  remove(index) {
    if (this.get(index)) {
      return false
    }
    if (index === 0) {
      return this.shift()
    }
    const prevNode = this.get(index - 1)
    const nodeToRemove = this.get(index)

    prevNode.next = prevNode.next.next
    this.length--
    return nodeToRemove
  }
  insert(index, data) {
    if (index > this.length || index < 0) {
      return false
    }

    if (index === 0) {
      this.unshift(data)
      return true
    }

    const prevNode = this.get(index - 1)
    const nextNode = this.get(index)

    prevNode.next = new Node(data, nextNode)
    this.length++
    return true
  }
}
