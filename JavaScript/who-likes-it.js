/*
  INSTRUCTIONS
  =============================================================

  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

  Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

  likes [] // must be "no one likes this"
  likes ["Peter"] // must be "Peter likes this"
  likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
  likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
  likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/

/*
  MY SOLUTION
*/
function likes(names) {
    let message = '';
  switch(names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return names[0] + ' likes this';
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
    case 3:{
      for(let i = 0; i < names.length; i++) {
        if(i != names.length - 2) {
          //Not the second to last character.
          message = message + names[i] + ', ';
        } else {
          //Second to last character.
          message = message + names[i] + ' and ' + names[i + 1];
          return message + ' like this';
        }
      }  
    } 
    default: {
      for(let i = 0; i < names.length; i++) {
        if(i < 2) {
          // Not on the 3rd word.
          if(i == 0) {
            // Append comma for non-second word.
            message = message + names[i] + ', ';
          } else {
            // Exclude comma from appending since currently on second word.
            message = message + names[i];
          }
        } else {
          // Currently on the 3rd word.
          message = message + ' and ' + (names.length - i);
          return message + ' others like this';
        }
      }  
    }
  }
}
