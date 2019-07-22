// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n === 0) {
//     return n;
//   }
//   if (n < 0) {
//     return (
//       Number(
//         (n * -1)
//           .toString()
//           .split("")
//           .reverse()
//           .join("")
//       ) * -1
//     );
//   }
//   if (n > 0) {
//     return Number(
//       n
//         .toString()
//         .split("")
//         .reverse()
//         .join("")
//     );
//   }
// }

// function reverseInt(n) {
//   if (n === 0 || n.toString().length === 1) {
//     return n;
//   }
//   if (n < 0) {
//     const numArray = [];
//     const nArray = (n * -1).toString().split("");
//     let end = nArray.length;
//     while (numArray.length !== end) {
//       numArray.push(nArray.pop());
//     }
//     return Number(numArray.join("") * -1);
//   }

//   if (n > 0) {
//     const numArray = [];
//     const nArray = n.toString().split("");
//     let end = nArray.length;
//     while (numArray.length !== end) {
//       numArray.push(nArray.pop());
//     }
//     return Number(numArray.join(""));
//   }
// }

function reverseInt(n) {
  if (n === 0) {
    return n;
  }
  if (n < 0) {
    const numArr = [];
    (n * -1)
      .toString()
      .split("")
      .forEach(element => {
        numArr.unshift(element);
      });
    return Number(numArr.join("")) * -1;
  }
  if (n > 0) {
    const numArr = [];
    n.toString()
      .split("")
      .forEach(element => {
        numArr.unshift(element);
      });
    return Number(numArr.join(""));
  }
}
