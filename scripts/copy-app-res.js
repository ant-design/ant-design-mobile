const path = require('path');
const shell = require('child_process').execSync;

const fromDir = path.join(__dirname, '../rn-kitchen-sink/app');
const fromDir2 = path.join(__dirname, '../rn-kitchen-sink/dist');
const toDir = path.join(__dirname, '../_site/rn-kitchen-sink');

shell(`mkdir -p ${toDir}`);
shell(`cp -r ${fromDir}/* ${toDir}`);
shell(`cp -r ${fromDir2}/* ${toDir}`);
