#! /usr/bin/env node

const fs = require('fs');
const https = require('https');

const glyphJSON = `${__dirname}/../components/icon/glyph.json`;
const glyphFile = 'ant-design/ant-design/master/components/style/core/iconfont.less';
const regexPattern = /@{iconfont-css-prefix}-([\w-]+):before\s*{\s*content:\s*"\\?(\w+)";\s*}/g;

function makeGlyphMap(text) {
  const glyph = {};
  for (let xs = []; xs !== null; xs = regexPattern.exec(text)) {
    if (xs.length === 3) {
      glyph[xs[1]] = parseInt(xs[2], 16);
    }
  }

  return glyph;
}

https.get(`https://raw.githubusercontent.com/${glyphFile}`, (res) => {
  if (res.statusCode === 200) {
    let content = '';
    res.on('data', (d) => {
      content += d;
    });

    res.on('end', () => {
      const glyph = makeGlyphMap(content);
      const data = JSON.stringify(glyph, null, 2);
      fs.writeFile(glyphJSON, data, (err) => {
        if (err) {
          console.log(`Fail to update ${glyphJSON}: ${err}`);
        } else {
          console.log('done!');
        }
      });
    });
  } else {
    console.log(`Fail to get ${glyphFile}: ${res.statusCode}`);
  }
}).on('error', (e) => {
  console.error(e);
});
