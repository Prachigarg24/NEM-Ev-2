const fs = require('fs');
const path = require('path');
const { getTime } = require('./helpers');
const { processFile } = require('./fileProcessor');
const { log } = require('./logger');

const PROCESSING_FOLDER = path.join(__dirname, 'Processing');

function createFile() {
  const timestamp = Date.now();
  const fileName = `file-${timestamp}.txt`;
  const filePath = path.join(PROCESSING_FOLDER, fileName);

  fs.writeFileSync(filePath, `File Started Processing`);
  log(`Created new file: ${fileName}`);

  setTimeout(() => {
    processFile(fileName);
  }, 500); // small delay before moving to processing
}

// Create file every 3 seconds
setInterval(createFile, 3000);