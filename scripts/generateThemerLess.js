#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const bundle = require('less-bundle-promise');

let content = `@import "${glob.sync(path.join(__dirname, '../components/style/index.less'))}";\n`;
const styles = glob.sync(path.join(__dirname, '../components/*/style/index.less'));
styles.forEach((style) => {
  content += `@import "${style}";\n`;
});

fs.writeFileSync(path.join(__dirname, '../_site/themerEntry.less'), content);

bundle({
  src: path.join(__dirname, '../_site/themerEntry.less'),
}).then((output) => {
  const outputFilePath = path.join(__dirname, '../_site/themer.less');
  fs.writeFileSync(path.join(__dirname, '../_site/themer.less'), output);
  console.log(`Theme generated successfully. OutputFile: ${outputFilePath}`);
});
