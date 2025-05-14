const { randomInt } = require('crypto');

function generateRandomSeconds() {
  return randomInt(1, 7); // 1 to 6 seconds
}

function getTime() {
  return new Date().toLocaleTimeString();
}

module.exports = { generateRandomSeconds, getTime };