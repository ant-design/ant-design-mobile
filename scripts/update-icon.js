#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const http = require('https');
const { Buffer } = require('buffer');

function debug(...args) {
  console.log(...args);
}

/**
 * Stringify
 *
 * @param {any} value
 * @return {string}
 */
function stringify(value) {
  return JSON.stringify(value, null, 2);
}

/**
 * Parse icon URL
 *
 * @param {string} text
 * @return {?string}
 */
function parseIconURL(text) {
  const match = /@icon-url\s*:\s*"(.+)";/.exec(text);
  return match && `${match[1]}.ttf`;
}

/**
 * Parse glyph map
 *
 * @param {string} text
 * @return {Object.<string, number>}
 */
function parseGlyphMap(text) {
  const glyph = {};
  const regex = /@{iconfont-css-prefix}-([\w-]+):before\s*{\s*content:\s*"\\?(\w+)";\s*}/g;
  for (let xs = []; xs !== null; xs = regex.exec(text)) {
    if (xs.length === 3) {
      glyph[xs[1]] = parseInt(xs[2], 16);
    }
  }

  return glyph;
}

/**
 * Read file over HTTP
 *
 * @param {string} file
 * @return {Promise.<(string|Buffer)>}
 */
function readFileOverHttp(file) {
  return new Promise((resolve, reject) => {
    http.get(file, (res) => {
      debug(file, 'start');

      if (res.statusCode === 200) {
        debug(file, 'downloading...');

        const chunks = [];
        res.on('data', (chunk) => {
          chunks.push(chunk);
        });

        res.on('end', () => {
          const hasString = typeof chunks[0] === 'string';
          resolve(hasString ? chunks.join('') : Buffer.concat(chunks));

          debug(file, 'done!');
        });
      } else {
        reject(new Error(`Fail: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

/**
 * Resolve source file of [Ant Design repo](https://github.com/ant-design/ant-design)
 *
 * For example:
 * - https://raw.githubusercontent.com/ant-design/ant-design/3.1.4/components/style/themes/default.less
 * - https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/themes/default.less
 * - https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/core/iconfont.less
 *
 * @param {string} version - branch or tag of the repo
 * @param {string} file - file path
 * @return {string}
 */
function resolveSource(version, file) {
  return `https://raw.githubusercontent.com/ant-design/ant-design/${version}/${file}`;
}

(function (version) {
  const recipes = [
    {
      file: '../components/icon/glyph.json',
      source: 'components/style/core/iconfont.less',
      steps: [parseGlyphMap, stringify],
    },
    {
      file: '../fonts/anticon.ttf',
      source: 'components/style/themes/default.less',
      steps: [parseIconURL, readFileOverHttp],
    },
  ].map(({ file, source, steps }) => {
    const init = readFileOverHttp(resolveSource(version, source));
    return steps.reduce((prev, next) => prev.then(next), init).then((data) => {
      const filePath = path.resolve(__dirname, file);
      return fs.writeFileSync(filePath, data);
    });
  });

  Promise.all(recipes)
    .then(() => debug('done!'))
    .catch(e => debug(e.message));
}(process.argv[2] || 'master'));
