// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* Solution Works But Fails Tests (toLowerCase()) */
// function palindrome(str) {
//   let revStr = '';
//   for (let char of str) {
//     revStr = char.toLowerCase() + revStr;
//   }
//   if (str.toLowerCase() === revStr) {
//     return true;
//   } else {
//   return false;
//   }
// }

/* My Solution */
// function palindrome(str) {
//   let revStr = '';
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   if (str === revStr) {
//     return true;
//   } else {
//   return false;
//   }
// }

/* Solution 1 */
// function palindrome(str) {
//   const reversed = str
//   .split('')
//   .reverse()
//   .join('');
//
//   return str === reversed;
// }

/* Solution 2 (not an ideal solution) */
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


module.exports = palindrome;
