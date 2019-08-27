// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      strArr.push(str[i].toUpperCase());
    } else if (str[i - 1] === " ") {
      strArr.push(str[i].toUpperCase());
    } else {
      strArr.push(str[i]);
    }
  }
  return strArr.join("");
}

module.exports = capitalize;
