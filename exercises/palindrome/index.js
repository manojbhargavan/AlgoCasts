// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str === reverse(str);
// }

function reverse(str) {
  return str.split("").reduce((acc, char) => char + acc, "");
}

function palindrome(str) {
  const strlen = str.length;
  const splitarr = str.split("");
  return splitarr.every((char, index) => {
    return char === splitarr[strlen - index - 1];
  });
}

module.exports = palindrome;
