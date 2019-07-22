// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   if (str.length === 1) {
//     return str;
//   }
//   const strArr = [...str].sort();
//   console.log(`array ${strArr}`);
//   let maxCount = 0;
//   let currentCount = 0;
//   let maxChar = "";

//   strArr.forEach((character, idx) => {
//     if (character !== strArr[idx + 1]) {
//       currentCount + 1;
//       if (currentCount > maxCount) {
//         maxCount = currentCount;
//         currentCount = 0;
//         return (maxChar = character);
//       }
//       currentCount = 0;
//     }
//     if (character === strArr[idx + 1]) {
//       return (currentCount += 1);
//     }
//   });
//   return maxChar;
// }

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;

    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
