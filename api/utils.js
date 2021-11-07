const reverseString = (str) => {
  return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
  const reversedText = str.toLowerCase().replace(/[ ,.]/g, '').split('').reverse().join('')
  const originalWithoutSpaces = str.toLowerCase().replace(/[ ,.]/g, '')
  return reversedText === originalWithoutSpaces
}

module.exports = {
  reverseString,
  isPalindrome
}
