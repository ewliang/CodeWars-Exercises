/*
  INSTRUCTIONS
  =============================================================
  You have an array of numbers.
  Your task is to sort ascending odd numbers but even numbers must be on their places.

  Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

  Example

  sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
  sortArray([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0]
  sortArray([]) // []
*/

/*
  MY SOLUTION
*/
function sortArray(array) {
  let temp; // Temporarily holds the original value so it won't be missing when swapping occurs.
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 != 0) {
      // array[i]'s value is Odd Number - Proceed
      for(let j = i + 1; j < array.length; j++) { // j = i + 1 because we don't want to loop over array[i] over itself.
        if((array[i] > array[j]) && (array[j] % 2 != 0)) {
          // Neighbor is smaller & is odd, so swap places.
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        } 
        // All other cases are either even number or isn't greater so no swapping needed. Ignore and proceed.
      }
    } 
  }
  return array;
}
