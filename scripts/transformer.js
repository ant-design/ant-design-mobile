/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Note: This is a fork of the fb-specific transform.js
 */
const babel = require('babel-core');
const externalHelpersPlugin = require('babel-plugin-external-helpers');
const generate = require('babel-generator').default;
const inlineRequiresPlugin = require('babel-preset-fbjs/plugins/inline-requires');
const makeHMRConfig = require('babel-preset-react-native/configs/hmr');
const path = require('path');
const { compactMapping } = require('react-native/packager/src/Bundler/source-map');

/**
 * Return a memoized function that checks for the existence of a
 * project level .babelrc file, and if it doesn't exist, reads the
 * default RN babelrc file and uses that.
 */
const getBabelRC = (function () {
  return function _getBabelRC(projectRoots) {
    let projectBabelRCPath;
    if (projectRoots && projectRoots.length > 0) {
      projectBabelRCPath = path.resolve(projectRoots[0], '.babelrc');
    }
    return {
      plugins: [],
      extends: projectBabelRCPath,
    };
  };
}());

/**
 * Given a filename and options, build a Babel
 * config object with the appropriate plugins.
 */
function buildBabelConfig(filename, options) {
  const babelRC = getBabelRC(options.projectRoots);

  const extraConfig = {
    code: false,
    filename,
  };

  let config = Object.assign({}, babelRC, extraConfig);

  // Add extra plugins
  const extraPlugins = [externalHelpersPlugin];

  const inlineRequires = options.inlineRequires;
  const blacklist = inlineRequires && inlineRequires.blacklist;
  if (inlineRequires && !(blacklist && filename in blacklist)) {
    extraPlugins.push(inlineRequiresPlugin);
  }

  config.plugins = extraPlugins.concat(config.plugins);

  if (options.hot) {
    const hmrConfig = makeHMRConfig(options, filename);
    config = Object.assign({}, config, hmrConfig);
  }

  return Object.assign({}, babelRC, config);
}

function transform(src, filename, options) {
  options = options || {};
  const babelConfig = buildBabelConfig(filename, options);
  const { ast } = babel.transform(src, babelConfig);
  const result = generate(ast, {
    comments: false,
    compact: false,
    filename,
    sourceFileName: filename,
    sourceMaps: true,
  }, src);

  return {
    ast,
    code: result.code,
    filename,
    map: options.generateSourceMaps ? result.map : result.rawMappings.map(compactMapping),
  };
}

module.exports = function (data, callback) {
  let result;
  try {
    result = transform(data.sourceCode, data.filename, data.options);
  } catch (e) {
    callback(e);
    return;
  }

  callback(null, result);
};

// export for use in jest
module.exports.transform = transform;
