const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'node_modules/@mediapipe/tasks-vision/vision_bundle_mjs.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading vision_bundle_mjs.js:', err);
    return;
  }
  const result = data.replace(/\/\/# sourceMappingURL=vision_bundle_mjs\.js\.map/g, '');

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) console.error('Error writing vision_bundle_mjs.js:', err);
    else console.log('Removed sourceMappingURL reference successfully.');
  });
});
