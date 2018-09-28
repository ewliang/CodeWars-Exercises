/*
  INSTRUCTIONS
  =============================================================
  Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

  Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
  Test.assertEquals(countBits(0), 0);
  Test.assertEquals(countBits(4), 1);
  Test.assertEquals(countBits(7), 3);
  Test.assertEquals(countBits(9), 2);
  Test.assertEquals(countBits(10), 2);
*/

/*
  MY SOLUTION
*/

var countBits = function(n) {
  // Convert n into a binary value stored as a string value.
  let binary = n.toString(2);
  let count = 0;
  for(let i = 0; i < binary.split('').length; i++) {
    // Count how many 1s in the binary 'n' number.
    if(binary.split('')[i] == 1)
      count++
  }
  return count;
};
