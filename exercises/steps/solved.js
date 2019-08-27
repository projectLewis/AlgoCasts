// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
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

function steps(n) {
  let count = n;
  let steps = "";
  while (count > 0) {
    let space = " ".repeat(count - 1);
    console.log(`${(steps += "#")}${space}`);
    count -= 1;
  }
}

module.exports = steps;
