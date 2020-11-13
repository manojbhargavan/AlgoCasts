// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let summary = str.split("").reduce((acc, char) => {
    acc[char] = acc[char]++ || 1;
    return acc;
  }, {});

  let max = 0;
  let maxChar = "";
  for (const key in summary) {
    if (summary[key] > max) {
      max = summary[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
