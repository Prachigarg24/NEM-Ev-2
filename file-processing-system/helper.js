const fs = require("fs");

function createDummyFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function logMessage(logFilePath, message) {
  const timestamp = new Date().toLocaleString();
  const log = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFilePath, log);
}

module.exports = { createDummyFile, logMessage };