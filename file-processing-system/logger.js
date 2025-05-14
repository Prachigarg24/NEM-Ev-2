const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'logs.txt');

function log(message) {
  const timestamp = new Date().toLocaleString();
  const fullLog = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, fullLog);
}

module.exports = { log };