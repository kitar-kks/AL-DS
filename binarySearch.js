// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

// Binary Search is O(log n) time for a sorted arr (**only work on sorted array**)
// Linear Search is O(n) time for an unsorted arr

const binarySearch = (sortedArr, value) => {
  let left = 0
  let right = sortedArr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midVal = sortedArr[mid]

    if (midVal === value) {
      return mid
    } else if (midVal < value) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
