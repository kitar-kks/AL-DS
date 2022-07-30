// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution 1
// Time: O(N^2)
const steps = () => {
  for (let i = 1; i <= n; i++) {
    let step = ''

    for (let hash = i; hash > 0; hash--) {
      step += '#'
    }
    for (let spaces = n - i; spaces > 0; spaces--) {
      step += ' '
    }
  }
}

// solution 2
// const steps = () => {
//   for (let i = 1; i <= n; i++) {
//     let step = ''

//     step += '#'.repeat(i)
//     step += ' '.repeat(n - i)
//   }
// }
