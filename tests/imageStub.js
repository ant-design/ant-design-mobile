const path = require('path');

module.exports = {
  process: (_, filename) => {
    const [name, ext] = path.basename(filename).split('.');
    if (ext === 'png') {
      return `module.exports = {
        uri: '${name}',
      }`;
    }
    return '';
  },
};
