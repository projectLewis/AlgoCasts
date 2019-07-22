// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

// function reverse(str) {
//   const strArr = [];
//   if (str.length < 0) {
//     return str
//   }
//   [...str].forEach(letter => {
//     strArr.unshift(letter)
//   });
//   return strArr.join('');
// }

// function reverse(str) {
//   if (str.length < 0) {
//     return str
//   }
//   return [...str].reverse().join('');
// }
