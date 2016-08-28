const fs = require('fs');
const path = require('path');

const iosDir = path.join(__dirname, '../rn-kitchen-sink/ios/bundle');
if (!fs.existsSync(iosDir)) {
  fs.mkdirSync(iosDir);
}

const androidDir = path.join(__dirname, '../rn-kitchen-sink/android/bundle');
if (!fs.existsSync(androidDir)) {
  fs.mkdirSync(androidDir);
}
