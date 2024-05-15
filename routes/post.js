const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");

async function validateCookies(req, res, next) {
  await cookieValidator(req.cookies);
  next();
}

async function cookieValidator(cookies) {
  console.log(cookies);
  // We don't have any cookies to validate, so we'll just return true for now.
  return true;
}