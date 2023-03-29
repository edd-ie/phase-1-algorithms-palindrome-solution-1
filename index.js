function isPalindrome(word) {
  // Write your algorithm here'
  let rev = word.split("").reverse().join("");
  return rev === word
}

/* 
  Add your pseudocode here
  revere word
    compare the 2 words
    return result
*/

/*
  Add written explanation of your solution here
  rev is reverse of word which was gotten by:
    split the word into an array of letters
    reverse the array
    join the array to a single string
  the compares rev and word if they are equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
