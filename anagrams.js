// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


  //second solution

    function anagram(strA, strB){
       return cleanedStr(strA) === cleanedStr(strB);
    }

    //helper to clean string, remove capitals and punctuation. Then split into array and sort alphabetically, then join back
    function cleanedStr(str) {
        return str..replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
    }


module.exports = anagrams;

//first solution ++++++++++++++

// function anagram(strA, strB){
//     const aCharMap = buildCharMap(strA);
//     const bCharMap = buildCharMap(strB);
    
//     //compare number of keys to check length
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false;
//     }
//   //   //iterate over one charMap to compare values with other
//     for (let char in aCharMap) {
//       if(aCharMap[char] !== bCharMap[char]) {
//         return false;
//       }
//     }
//     return true 
//   }
  
//   function buildCharMap(str) {
//     const charMap = {};
//     let cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();
  
//     for (let char of cleanedStr) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }
