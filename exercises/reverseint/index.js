// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const int = Math.sign(n);
  let reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''));
  reversed = reversed * int;
  return reversed;
}

module.exports = reverseInt;
