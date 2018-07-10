// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* My Solution */
// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     revStr += str[i];
//   }
//   return revStr;
// }

/* Alternate Solution 1 */
// function reverse(str) {
//   // const arr = str.split('');
//   // arr.reverse();
//   // return arr.join('');
//   //
//   // More Concisely
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

/* Alternate Solution 2 */
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

/* Alternate Solution 3 */
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
