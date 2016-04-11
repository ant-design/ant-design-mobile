#! /usr/bin/env node

'use strict';

// Ensure that data directory exist.
require('mkdirp').sync('./_data');

const buildDemosList = require('./build-demos-list');
buildDemosList(['./components', './docs'], './_data/demos-list.js');

const buildCommon = require('./build-common');
buildCommon([
  './components',
  './docs',
  './CHANGELOG.md',
], './_data/react-components.js');
