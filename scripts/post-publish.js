const fs = require('fs');
const path = require('path');
if (fs.existsSync(path.join(__dirname, '../package.json.bak'))) {
  fs.renameSync(path.join(__dirname, '../package.json.bak'), path.join(__dirname, '../package.json'));
}
