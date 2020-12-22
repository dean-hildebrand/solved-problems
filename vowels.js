// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//iterative solution
function vowels(str) {
  let result = 0

for (let char of str.toLowerCase()){
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    result++
  }
}
return result
}

//second iterative solution
function vowels(str) {
    let result = 0
    const letters = "aeiou"
  
  for (let char of str.toLowerCase()){
    if (letters.includes(char)) {
      result++
    }
  }
  return result
  }

  //regex
  // g - runs through the whole str and not just the first one
  //i - takes care of upper/lowercase
  function vowels(str) {
      const matches = str.match(/[aeiou]/gi);
      return matches ? matches.length : 0;
  }