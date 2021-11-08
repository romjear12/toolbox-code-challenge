/* eslint-env mocha */
const expect = require("chai").expect;
const utils = require("./utils");
const { reverseString, isPalindrome } = utils;

describe("Reverse string function", function () {
  it("reverseString('') returns ''", async function () {
    const reversedText = reverseString("");
    expect(reversedText).to.eql("");
  });

  it("reverseString('prueba') returns 'abeurp'", async function () {
    const reversedText = reverseString("prueba");
    expect(reversedText).to.eql("abeurp");
  });
});

describe("Palindrome function", function () {
  it("palindrome: not a palindrome = false", async function () {
    const palindrome = isPalindrome("not a palindrome");
    expect(palindrome).to.be.false;
  });

  it("palindrome: race car = true", async function () {
    const palindrome = isPalindrome("race car");
    expect(palindrome).to.be.true;
  });

  it("palindrome: My age is 0, 0 si ega ym = true", async function () {
    const palindrome = isPalindrome("My age is 0, 0 si ega ym");
    expect(palindrome).to.be.true;
  });
});
