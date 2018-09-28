/*
  INSTRUCTIONS
  =============================================================
  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:

  ['a','b','c','d','f'] -> 'e'
  ['O','Q','R','S'] -> 'P'
  (Use the English alphabet with 26 letters!)
*/

/*
  MY SOLUTION
*/
function findMissingLetter(array)
{
  for(let i = 0; i < array.length; i++) {
    // Check if current character in ASCII code is equal to the next item's ASCII code + 1.
    // If it's true, then that means there's no missing sequence so far.
    // If it's false, use the current ASCII number, increase by 1, and return that after converted back to a char string value.
    if(array[i + 1].charCodeAt(0) != (array[i].charCodeAt(0) + 1)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}
