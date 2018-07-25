// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* My Solution */
function anagrams(stringA, stringB) {
  let charsMapA = {};
  let charsMapB = {};

  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();

  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  for (let char of stringA) {
    charsMapA[char] == null
      ? charsMapA[char] = 1
      : charsMapA[char] = charsMapA[char] + 1
  }

  for (let char of stringB) {
    charsMapB[char] == null
      ? charsMapB[char] = 1
      : charsMapB[char] = charsMapB[char] + 1
  }

  isAnagram = () => {
    if (Object.keys(charsMapA).length !== Object.keys(charsMapB).length) {
      return false;

    } else {
      for (let char in charsMapA) {
        if (charsMapA[char] === charsMapB[char]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  return isAnagram()
}

/* Solution 1 */
// function anagrams(stringA, stringB) {}

module.exports = anagrams;
