const nativeRemoveDupes = (arr) => {
  const unique = []

  for (let i = 0; i < arr.length; i++) {
    const inputNum = arr[i]
    if (!unique.includes(inputNum)) {
      unique.push(inputNum)
    }
  }
  return unique
}

const optimizedRemoveDupes = (arr) => {
  const unique = []
  const hashmap = {}

  for (let i = 0; i < arr.length; i++) {
    const inputNum = arr[i]

    if (!hashmap[inputNum]) {
      unique.push(inputNum)
    }

    hashmap[inputNum] = true
  }
  return unique
}
