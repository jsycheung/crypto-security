function encipherFunc(phrase) {
  // Define the cipher to encode the string
  let cipher = 16;
  // Create a ciphered phrase string to add letters to one-by-one
  let cipheredPhrase = "";
  // Start iterating through the original string
  for (let i = 0; i < phrase.length; i++) {
    // Capture the ascii code for the given letter in the original string, plus the value of the cipher
    let strValue = phrase[i].charCodeAt() + cipher;
    // Add the letter that belongs to the updated ascii value to the ciphered phrase string
    cipheredPhrase += String.fromCharCode(strValue);
  }
  console.log(cipheredPhrase);
  // return the ciphered phrase string
  return cipheredPhrase;
}

function decipherFunc(cipheredPhrase) {
  // Define the decipher to decode the string
  let decipher = 16;
  // Create an original phrase string to add letters to one-by-one
  let originalPhrase = "";
  // Start iterating through the ciphered phrase string
  for (let i = 0; i < cipheredPhrase.length; i++) {
    // Capture the ascii code for the given letter in the ciphered phrase string, minus the value of the decipher
    let strValue = cipheredPhrase[i].charCodeAt() - decipher;
    // Add the letter that belongs to the updated ascii value to the original phrase string
    originalPhrase += String.fromCharCode(strValue);
  }
  console.log(originalPhrase);
  // return the original phrase string
  return originalPhrase;
}

const cipheredPhrase = encipherFunc("I love cryptography!");
decipherFunc(cipheredPhrase);
