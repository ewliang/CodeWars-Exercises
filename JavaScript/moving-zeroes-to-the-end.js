/*
  INSTRUCTIONS
  =============================================================
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

/*
  MY SOLUTION
*/

var moveZeros = function (arr) {
  let answer = [];
  let zeroCounter = 0;
  /*
    Zero Present Checker
    True = increment counter
    False = push current value into answer array
  */
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeroCounter++;
    } else {
      answer.push(arr[i]);
    }
  }
  /*
    Once array is fully scanned through, insert zeroes into the answer array based on the number of zeroes recorded via zeroCounter.
  */
  for(let i = 0; i < zeroCounter; i++) {
    answer.push(0);
  }
  return answer;
}
