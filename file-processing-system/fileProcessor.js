const fs = require('fs');
const path = require('path');
const { generateRandomSeconds, getTime } = require('./helpers');
const { log } = require('./logger');

function processFile(fileName) {
  const sourcePath = path.join(__dirname, 'Processing', fileName);
  const inProgressPath = path.join(__dirname, 'In-Progress', fileName);

  fs.renameSync(sourcePath, inProgressPath);
  fs.appendFileSync(inProgressPath, `\nIn-Progress`);

  log(`File ${fileName} moved to In-Progress`);

  const duration = generateRandomSeconds();
  const startTime = Date.now();

  setTimeout(() => {
    const now = Date.now();
    const timeTaken = (now - startTime) / 1000;

    let finalStatus, targetPath;

    if (duration < 5) {
      finalStatus = `Final-Status: Completed at ${getTime()}`;
      targetPath = path.join(__dirname, 'Completed', fileName);
    } else {
      finalStatus = `Final-Status: Crashed at ${getTime()}`;
      targetPath = path.join(__dirname, 'Crashed', fileName);
      log(`ERROR: ${fileName} crashed (processing time: ${duration}s)`);
    }

    fs.appendFileSync(inProgressPath, `\n${finalStatus}`);
    fs.renameSync(inProgressPath, targetPath);
    log(`File ${fileName} moved to ${duration < 5 ? 'Completed' : 'Crashed'} folder`);

  }, duration * 1000);

  // Warning if still In-Progress after 3s
  setTimeout(() => {
    if (fs.existsSync(inProgressPath)) {
      log(`WARNING: ${fileName} is still in progress after 3 seconds`);
    }
  }, 3000);
}

module.exports = { processFile };