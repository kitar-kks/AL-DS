// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

// Time: O(N)
function linearSearchIndexOf(arr, val) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === val) {
  //       return i
  //     }
  //   }
  //   return -1
  return arr.indexOf(val)
}

function linearSearchIncludes(arr, val) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === val) {
  //       return true
  //     }
  //   }
  //   return false
  return arr.include(val)
}

function linearSearchFind(arr, cb) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (cb(arr[i]) === true) {
  //       return arr[i]
  //     }
  //   }
  //   return undefined
  return arr.find(cb)
}
