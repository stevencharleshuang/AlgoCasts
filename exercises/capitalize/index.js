// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const strArr = str.toLowerCase().split(' ');
  let capStr = []
  for (let word of strArr) {
    // word[0].toUpperCase() + word.slice(1);
    capStr.push(word[0].toUpperCase() + word.slice(1))
  }
  capStr = capStr.join(' ')
  return capStr;
}

module.exports = capitalize;
