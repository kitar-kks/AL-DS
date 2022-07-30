// Create a queue data structure.  The queue should
// have methods 'enqueue' and 'dequeue' which add / remove
// elements from the queue AND also maintain 'first-in first-out'
// --- Examples
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// expect(q.dequeue()).toEqual(1);

class Queue {
  constructor() {
    this.data = []
  }
  enqueue(val) {
    this.data.unshift(val)
  }
  dequeue() {
    return this.data.pop()
  }
}
