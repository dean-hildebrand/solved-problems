// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}


//helper function to build character map
function buildCharMap(str) {
    const charMap = {};
    let cleanedStr = str.replace(/[^\w]/g, "").toLowerCase()

    for (let char of cleanedStr) {
        if(!charMap[char])
        charMap[char] = 1;
    } else {
        charMap[char]++;
    }
}

module.exports = anagrams;
