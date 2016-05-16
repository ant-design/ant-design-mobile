'use strict';

const fs = require('fs');
const path = require('path');
fs.renameSync(path.join(__dirname, '../package.json.bak'), path.join(__dirname, '../package.json'));
