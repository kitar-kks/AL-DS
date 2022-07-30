// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

const maxChar = (str) => {
  let charCountObj = {}
  let maxChar = ''
  let maxCount = 0

  // original
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    charCountObj = charCountObj[char] + 1 || 1
    console.log(`i: ${charCountObj}`)

    if (charCountObj[char] > maxCount) {
      maxChar = char
      maxCount = charCountObj[char]
    }
  }
  console.log(maxChar)
  return maxChar
}

console.log(maxChar('testtttt'))

// solution using reduce and other higher order methods:
function maxChar(str) {
  const arr = [...str].reduce((finalArr, oneLetter) => {
    finalArr[oneLetter] = finalArr[oneLetter] + 1 || 1
    return finalArr
  }, {})
  return Object.keys(arr).filter(
    (key) => arr[key] === Math.max(...Object.values(arr))
  )
}

// solution using the JS Map structure instead of a JS object.
function maxChar(str) {
  const map = new Map()
  let max = 0
  let maxChar = ''

  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    const elementInMap = map.get(element)

    map.set(element, elementInMap + 1 || 1)

    if (elementInMap > max) {
      maxChar = element
      max = elementInMap
    }
  }
  return maxChar
}
