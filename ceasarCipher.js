// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

const caeserCipher = (str, shift) => {
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let res = ''

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const idx = alphabetArr.indexOf(char)

    if (idx === -1) {
      res += char
      continue
    }

    const encodeedIdx = (idx + shift) % 26
    res += alphabetArr[encodeedIdx]
  }

  return res
}
