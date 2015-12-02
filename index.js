import React from 'react';

require('./style/index.less');

const antm = {
  ListWrap: require('./components/listwrap'),
  ListHeader : require('./components/listheader'),
  ListBody : require('./components/listbody'),
  ListFooter : require('./components/listfooter'),
  ListItem : require('./components/listitem'),
  InputItem : require('./components/inputitem'),
  FormUtil : require('./components/formutil')
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
