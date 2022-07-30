// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

// console.log('abc'.slice(-1))
// console.log('abc'.substring(-1))
// let arr = ['a', 'b', 'c']

// console.log('abc'.split(''))
// console.log('abc'.split(' '))
// console.log(arr.join(''))
// console.log(arr.join(' '))

const capitalize = (str) => {
  const arrOfWords = str.split(' ')
  const arrOfWordsCased = []

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i]
    arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
  }
  return arrOfWordsCased.join(' ')
}
// console.log(capitalize('sHoRt AnD sToUt'))
