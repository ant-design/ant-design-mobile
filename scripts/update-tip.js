/* eslint-disable */
const fs = require('fs');
const debug = (...args) => {
  // console.log(...args);
}
const projectRoot = getProjectRoot();
const nodeModulesRoot = `${projectRoot}/node_modules`;
const antdMobileRoot = `${nodeModulesRoot}/antd-mobile`;

debug('\n------------------------------------');
debug(`[antd-mobile-update-tip] projectRoot: ${projectRoot}`);
debug(`[antd-mobile-update-tip] nodeModulesRoot: ${nodeModulesRoot}`);
debug(`[antd-mobile-update-tip] antdMobileRoot: ${antdMobileRoot}`);

if (!fs.existsSync(`${projectRoot}/package.json`) || !fs.existsSync(`${antdMobileRoot}/package.json`)) {
  debug('[antd-mobile-update-tip] Not found package.json.');
  debug('------------------------------------');
  return;
}

const projectInfo = require(`${projectRoot}/package.json`);
/** version.json 保存目录 */
const targetDir = `${antdMobileRoot}/lib/_util`;
/** version.json 路径 */
const targetFile = `${targetDir}/version.json`;

if (projectInfo['antd-mobile'] && projectInfo['antd-mobile']['upgrade-tip'] === false) {
  debug('[antd-mobile-update-tip] upgrade-tip disabled.');
  debug('------------------------------------');
  if (fs.existsSync(targetDir)) {
    fs.writeFileSync(targetFile, JSON.stringify({ _disable: true }));
  }
  return;
}

const versionList = {};
const antdMobileInfo = require(`${antdMobileRoot}/package.json`);
versionList[antdMobileInfo.name] = antdMobileInfo.version;

debug(
  `\nantd-mobile: ${antdMobileInfo.version}\n`,
  'dependencies:',
);

Object.keys(antdMobileInfo.dependencies)
  .filter(depName => depName.indexOf('rc-') === 0 || depName.indexOf('rmc-') === 0)
  .forEach(depName => {
    let version = '';
    packagePath = `${nodeModulesRoot}/${depName}/package.json`;
    if (fs.existsSync(packagePath)) {
      version = require(packagePath).version;
    }
    debug(`    ${depName}\t: ${version}`);
    versionList[depName] = version;
  });

if (fs.existsSync(targetDir)) {
  fs.writeFileSync(targetFile, JSON.stringify(versionList));
} else {
  debug('[antd-mobile-update-tip] Not found lib/_util dir.');
}

debug(
  '------------------------------------\n',
);

function getProjectRoot() {
  const cwd = process.cwd();
  const index = cwd.lastIndexOf('/node_modules/');
  if (index >= 0) {
    return cwd.slice(0, index);
  } else {
    return cwd;
  }
}
