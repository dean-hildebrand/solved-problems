// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   if(str.split("").reverse().join("") === str) {
//     return true
//   } else {
//     return false
//   }
// }

// function palindrome(str) {
//   let reversed = []

//     for(let i = str.length - 1; i >= 0; i--) {
//       reversed.push(str[i])
//     }
//  if(reversed.join("") === str){
//    return true
//  } else {
//    return false
//  }
// }

//checks every character with it's opposite, however it double checks each character
function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
