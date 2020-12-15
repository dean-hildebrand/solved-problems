// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let result = {};
  let stringDownCase = str.toLowerCase();
  let max = 0;
  let maxChar = "";

  for (let char of stringDownCase) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }

  // char in for in loop is the "key"
  for (let char in result) {
    if (result[char] > max) {
      max = result[char];
      maxChar = char;
    }
  }
  return maxChar;
}

maxChar("Hello World");
