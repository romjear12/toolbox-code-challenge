/* eslint-env mocha */
const expect = require('chai').expect
const utils = require('./utils')
const { reverseString, isPalindrome } = utils

describe('reverse string', function () {
  it('reverse string empty', async function () {
    const reversedText = reverseString('')
    expect(reversedText).to.eql('')
  })

  it('reverse string works', async function () {
    const reversedText = reverseString('prueba')
    expect(reversedText).to.eql('abeurp')
  })
})

describe('palindrome', function () {
  it('palindrome false', async function () {
    const palindrome = isPalindrome('not a palindrome')
    expect(palindrome).to.be.false
  })

  it('palindrome true', async function () {
    const palindrome = isPalindrome('race car')
    expect(palindrome).to.be.true
  })

  it('palindrome true', async function () {
    const palindrome = isPalindrome('My age is 0, 0 si ega ym.')
    expect(palindrome).to.be.true
  })
})
