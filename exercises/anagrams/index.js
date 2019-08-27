// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let useable = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  let strArrA = [];
  let strArrB = [];

  const test1 = stringA
    .toLowerCase()
    .split("")
    .sort();
  console.log(test1);

  test1.forEach(element => {
    if (useable.indexOf("element") !== -1) {
      console.log(element);
      strArrA.push(element);
    }
  });
  const test2 = stringB
    .toLowerCase()
    .split("")
    .sort();
  test2.forEach(element => {
    if (useable.indexOf("element") !== -1) {
      strArrA.push(element);
    }
  });
  console.log(`A - ${strArrA}`);
  console.log(`B - ${strArrB}`);
  if (strArrA.sort().join("") === strArrB.sort().join("")) {
    return true;
  }
  return false;
}

console.log(anagrams("A tree, a life, a bench", "A tree, a fence, a yard"));

module.exports = anagrams;
