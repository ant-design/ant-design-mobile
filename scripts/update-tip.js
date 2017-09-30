/* eslint-disable */
var fs = require('fs');
function debug() {
  // console.log.apply(this, arguments);
}
var projectRoot = getProjectRoot();
var nodeModulesRoot = projectRoot + '/node_modules';
var antdMobileRoot = nodeModulesRoot + '/antd-mobile';

debug('\n------------------------------------');
debug('[antd-mobile-update-tip] projectRoot: ' + projectRoot);
debug('[antd-mobile-update-tip] nodeModulesRoot: ' + nodeModulesRoot);
debug('[antd-mobile-update-tip] antdMobileRoot: ' + antdMobileRoot);

if (!fs.existsSync(projectRoot + '/package.json') || !fs.existsSync(antdMobileRoot + '/package.json')) {
  debug('[antd-mobile-update-tip] Not found package.json.');
  debug('------------------------------------');
  return;
}

var projectInfo = require(projectRoot + '/package.json');
/** version.json 保存目录 */
var targetDir = antdMobileRoot + '/lib/_util';
/** version.json 路径 */
var targetFile = targetDir + '/version.json';

if (projectInfo['antd-mobile'] && projectInfo['antd-mobile']['upgrade-tip'] === false) {
  debug('[antd-mobile-update-tip] upgrade-tip disabled.');
  debug('------------------------------------');
  if (fs.existsSync(targetDir)) {
    fs.writeFileSync(targetFile, JSON.stringify({ _disable: true }));
  }
  return;
}

var versionList = {};
var antdMobileInfo = require(antdMobileRoot + '/package.json');
versionList[antdMobileInfo.name] = antdMobileInfo.version;

debug('\nantd-mobile: ' + antdMobileInfo.version + '\n', 'dependencies:');

Object.keys(antdMobileInfo.dependencies).filter(function (depName) {
  return depName.indexOf('rc-') === 0 || depName.indexOf('rmc-') === 0;
}).forEach(function (depName) {
  var version = '';
  packagePath = nodeModulesRoot + '/' + depName + '/package.json';
  if (fs.existsSync(packagePath)) {
    version = require(packagePath).version;
  }
  debug('    ' + depName + '\t: ' + version);
  versionList[depName] = version;
});

if (fs.existsSync(targetDir)) {
  fs.writeFileSync(targetFile, JSON.stringify(versionList));
} else {
  debug('[antd-mobile-update-tip] Not found lib/_util dir.');
}

debug('------------------------------------\n');

function getProjectRoot() {
  var cwd = process.cwd();
  var index = cwd.lastIndexOf('/node_modules/');
  if (index >= 0) {
    return cwd.slice(0, index);
  } else {
    return cwd;
  }
}
