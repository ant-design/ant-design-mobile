var fs = require('fs');
var cwd = process.cwd();
var path = require('path');
var antmCss = path.join(cwd, 'dist/index.css');
fs.createReadStream(antmCss)
  .pipe(fs.createWriteStream(path.join(cwd, 'lib/index.css')));
console.log('prenpm done');
