// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

// Time : O(N*M) , Space : O(1)
const stringPatternSearch = (text, pattern) => {
  let count = 0

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j]
      if (patternChar !== text[i + j]) {
        break
      }

      if (j === pattern.length - 1) {
        count++
      }
    }
  }
  return count
}
