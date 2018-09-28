/*
  INSTRUCTIONS
  =============================================================
  In this kata you are required to, given a string, replace every letter with its position in the alphabet.

  If anything in the text isn't a letter, ignore it and don't return it.

  a being 1, b being 2, etc.

  As an example:

  alphabet_position("The sunset sets at twelve o' clock.")
  Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.
*/

/*
  MY SOLUTION
*/

function alphabetPosition(text) {
  let answer = '';
  for(let i = 0; i < text.length; i++) {
    switch(text[i]) {
      case 'a':
      case 'A':
        answer += '1 ';
        break;
      case 'b':
      case 'B':
        answer += '2 ';
        break;
      case 'c':
      case 'C':
        answer += '3 ';
        break;
      case 'd':
      case 'D':
        answer += '4 ';
        break;
      case 'e':
      case 'E':
        answer += '5 ';
        break;
      case 'f':
      case 'F':
        answer += '6 ';
        break;
      case 'g':
      case 'G':
        answer += '7 ';
        break;
      case 'h':
      case 'H':
        answer += '8 ';
        break;
      case 'i':
      case 'I':
        answer += '9 ';
        break;
      case 'j':
      case 'J':
        answer += '10 ';
        break;
      case 'k':
      case 'K':
        answer += '11 ';
        break;
      case 'l':
      case 'L':
        answer += '12 ';
        break;
      case 'm':
      case 'M':
        answer += '13 ';
        break;
      case 'n':
      case 'N':
        answer += '14 ';
        break;
      case 'o':
      case 'O':
        answer += '15 ';
        break;
      case 'p':
      case 'P':
        answer += '16 ';
        break;
      case 'q':
      case 'Q':
        answer += '17 ';
        break;
      case 'r':
      case 'R':
        answer += '18 ';
        break;
      case 's':
      case 'S':
        answer += '19 ';
        break;
      case 't':
      case 'T':
        answer += '20 ';
        break;
      case 'u':
      case 'U':
        answer += '21 ';
        break;
      case 'v':
      case 'V':
        answer += '22 ';
        break;
      case 'w':
      case 'W':
        answer += '23 ';
        break;
      case 'x':
      case 'X':
        answer += '24 ';
        break;
      case 'y':
      case 'Y':
        answer += '25 ';
        break;
      case 'z':
      case 'Z':
        answer += '26 ';
        break;
      default:
        break;
    }
  }
  return answer.trim();
}
