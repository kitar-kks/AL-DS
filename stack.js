// Create a stack data structure.  The stack
// should be a class with methods 'push' and 'pop'.
// 'push' should add element to stack.
// 'pop' should remove top most element in the stack and return it.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2

class Stack {
  constructor() {
    this.data = []
  }
  push(val) {
    this.data.push(val)
  }
  pop() {
    return this.data.pop()
  }
}
