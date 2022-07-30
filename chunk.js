// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

// solution 1
const chunk = (arr, size) => {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const last = res[res.length - 1]

    if (!last || last.length === size) {
      res.push([item])
    } else {
      last.push(item)
    }
  }

  return res
}

// solution 2
function chunk(array, size) {
  let output = []
  for (let i = 0; i < array.length; i += size) {
    output.push(array.slice(i, size + i))
  }
  return output
}

console.log(chunk([0, 1, 2, 3, 4, 5], 2))
