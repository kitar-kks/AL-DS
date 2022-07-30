// Implement a swap helper function that we will use in both BS(bubbleSort) and SS
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

//bubbleSort works by having sorted data accumulate at end of array
// Time : O(N^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      swap(arr, i, j, j + 1)
    }
  }
  return arr
}

//selectionSort works by having sorted data accumulate at start of array
// Time : O(N^2) = terrible
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) {
        swapIdx = j
      }
    }
    swap(arr, i, swapIdx)
  }
  return arr
}

// sort() in js Time: O(n log n)
