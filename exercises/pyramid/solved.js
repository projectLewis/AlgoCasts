// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n) {
  let count = n;
  let levels = "";

  while (count > 0) {
    let spaces = " ".repeat(count - 1);
    if (count === n) {
      console.log(`${spaces}${(levels += "#")}${spaces}`);
    } else {
      console.log(`${spaces}${(levels += "##")}${spaces}`);
    }
    count -= 1;
  }
}

module.exports = pyramid;
