'use strict';

const fs = require('fs');
const path = require('path');
const packageInfo = require('../package.json');
packageInfo.name='@alipay/antm';
fs.writeFileSync(path.join(__dirname,'../package.json'),JSON.stringify(packageInfo, null,2));
