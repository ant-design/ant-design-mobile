const path = require('path');

module.exports = {
  process: (_, filename) => {
    const [name, ext] = path.basename(filename).split('.');
    if (ext === 'svg') {
      return `module.exports = '#${name}'`;
    } else if (ext === 'png') {
      return `module.exports = {
        uri: '${name}',
      }`;
    }
    return '';
  },
};
