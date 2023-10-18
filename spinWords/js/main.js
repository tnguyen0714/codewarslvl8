//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words
//reversed. (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only
//when more than one word is present.
// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  //TODO Have fun
  // //Split string and remove spaces
  // const splitString = string.split("");

  // //Reverse the string
  // // let reverseStringArray = splitString.reverse();
  // // console.log(reverseStringArray)

  // // Logic to count the string if the length is greater than five.

  // for (i = 0; i < splitString.length; i++) {
  //   if (splitString[i].length >= 5) {
  //     //Reverse the string
  //     const reverseStringArray = splitString.reverse();
  //     //Combine the reversed string
  //     const joinArray = reverseStringArray.join("");
  //     return joinArray;
  //   } else {
  //     return splitString.join("");
  //   }
  // }

  var sentence = "";
  var separateString = string.split(" ");
  
  for (var i = 0; i < separateString.length; i++) {
    if (sentence) sentence += ' ';
    if (separateString[i].length >= 5) {
      sentence += separateString[i].split("").reverse().join("");
    } else {
      sentence += separateString[i];
    }
  }
  return sentence;
}
