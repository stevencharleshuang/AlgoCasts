// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0
  let foundMaxChar = ''
  let charsMap = {};

  for (let char of str) {
    charsMap[char] == null
      ? charsMap[char] = 1
      : charsMap[char] = charsMap[char] + 1;
  }

  for (let char in charsMap) {
    if (charsMap[char] > max) {
      max = charsMap[char]
      foundMaxChar = char
    }
  }

  return foundMaxChar
}

maxChar('fuunny');

module.exports = maxChar;
