const fs = require('fs');
const path = require('path');
const packageInfo = require('../package.json');
packageInfo.name = '@alipay/antm';
fs.renameSync(path.join(__dirname, '../package.json'), path.join(__dirname, '../package.json.bak'));
fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(packageInfo, null, 2));
