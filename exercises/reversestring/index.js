// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   // Inbuild Functions
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   // For loop
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

function reverse(str) {
  //For Loop of
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }
  return reversed;
}

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

reverse("asdf");

module.exports = reverse;
