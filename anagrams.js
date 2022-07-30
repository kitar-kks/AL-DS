// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

// console.log('Test for replace string by this value'.replace('value', '123'))
// console.log('Test for replace string by this 12'.replace(/[0-9]/g, 'meow')) // regEx
// console.log(['a'] === ['a']) // return false becuase arr store in other memory
// console.log('a' === 'a') // return true becuase is equal in data and type

// BigO: Time Complexity = O(N + M), Space Complexity = O(1)
const anagram = (stringA, stringB) => {
  // Sanitize Input strings for insensitive case
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, '') // replace symblo !,blabla
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, '')

  if (stringA.length !== stringB.length) {
    return false
  }

  const stringACharCount = {}

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i]
    stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i]

    if (!stringACharCount[bChar]) {
      return false
    } else {
      stringACharCount[bChar]--
    }
  }

  return true
}
// Time: O(n log n)
const anagramsSolution2 = () => {
  // Sanitize Input strings for insensitive case
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, '') // replace symblo !,blabla
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, '')

  const stringASorted = stringA.split('').sort().join('')
  const stringBSorted = stringB.split('').sort().join('')

  return stringASorted === stringBSorted
}
