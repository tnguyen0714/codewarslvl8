//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words 
//reversed. (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only 
//when more than one word is present.
// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    //TODO Have fun 
    //Split string and remove spaces
      let splitString = string.split("");
    //Reverse the string
      let reverseStringArray = splitString.reverse();
    //Combine the reversed string
      let joinArray = reverseStringArray.join("");
    
    // Logic to count the string if the length is greater than five.
    // Need to figure out how to count the character count of each word with conditional statement.
    //Current output is that the entire string reverses instead of specific strings. 
    if (joinArray.length >= 5){
      return string;
    }
    else{
      return joinArray;
    }
  
  }