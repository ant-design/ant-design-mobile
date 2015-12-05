import React from 'react';

require('./style/index.less');

const antm = {
  ListWrap     : require('./components/list-wrap'),
  ListHeader   : require('./components/list-header'),
  ListBody     : require('./components/list-body'),
  ListFooter   : require('./components/list-footer'),
  ListItem     : require('./components/list-item'),
  InputItem    : require('./components/input-item'),
  CheckboxItem : require('./components/checkbox-item'),
  FormUtil     : require('./components/form-util'),
  WindowUtil   : require('./components/form-util/window-util'),
  SwitchItem   : require('./components/switch-item')
};

antm.version = require('./package.json').version;

if (process.env.NODE_ENV !== 'production') {
  const warning = require('warning');
  const semver = require('semver');
  const reactVersionInDeps = require('./package.json').devDependencies.react;
  warning(semver.satisfies(React.version, reactVersionInDeps) || semver.gtr(React.version, reactVersionInDeps),
    `antm@${antm.version} need react@${reactVersionInDeps} or higher, which is react@${React.version} now.`);
}

module.exports = antm;
