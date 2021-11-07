const express = require("express");
const app = express();
const port = 4000;

const utils = require("./utils");
const { reverseString, isPalindrome } = utils;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.get("/iecho", (req, res) => {
  const text = req.query.text;

  if (text) {
    const reversedText = reverseString(text);
    const palindrome = isPalindrome(text);
    return res.status(200).send({ text: reversedText, palindrome });
  } else {
    return res.status(400).send({ error: "no text" });
  }
});

app.listen(port, () => {
  console.log(`API Rest code challenge listening at http://localhost:${port}`);
});
