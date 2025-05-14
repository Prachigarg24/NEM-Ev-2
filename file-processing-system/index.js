const fs = require("fs");
const path = require("path");
const { createDummyFile, logMessage } = require("./helper");

const inProgressDir = path.join(__dirname, "In-Progress");
const logFilePath = path.join(__dirname, "logs", "logs.txt");

// Ensure In-Progress folder exists
if (!fs.existsSync(inProgressDir)) {
  fs.mkdirSync(inProgressDir);
}

let count = 0;
const maxFiles = 10;
const intervalTime = 5000; // 5 seconds

const interval = setInterval(() => {
  const timestamp = Date.now();
  const fileName = `file-${timestamp}.txt`;
  const filePath = path.join(inProgressDir, fileName);

  createDummyFile(filePath, "This is a sample content");
  logMessage(logFilePath, `Created new file: ${fileName}`);
  
  count++;
  if (count >= maxFiles) {
    logMessage(logFilePath, `Max limit reached. Stopping process.`);
    clearInterval(interval);
    console.log("Stopped after creating 10 files.");
  }
}, intervalTime);