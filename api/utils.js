/**
 * Reverse text (string) given by param
 * @param {String} str Text to reverse
 * @returns String
 */
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

/**
 * Handle text to know if it is palindrome
 * @param {String} str Input text given
 * @returns Boolean
 */
const isPalindrome = (str) => {
  const reversedText = str.toLowerCase().replace(/[ ,.]/g, "").split("").reverse().join("");
  const originalWithoutSpaces = str.toLowerCase().replace(/[ ,.]/g, "");
  return reversedText === originalWithoutSpaces;
};

module.exports = {
  reverseString,
  isPalindrome,
};
