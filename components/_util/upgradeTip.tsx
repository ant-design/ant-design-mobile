if (process.env.NODE_ENV === 'development') {
  const localVersion = require('./version.json');
  if (!localVersion._disable) {
    const server = 'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com';
    fetch(`${server}/filesync/prod/z/fengdie/antd-mobile-upgrade-tip/upgrade-tip-h5data.json`)
      .then(data => data.json())
      .then((data) => {
        let notice = '';
        const tipComponents = data.filter(item => {
          const key = item.name;
          if (key === '[notice]') {
            notice = item.tip;
          }
          if (!localVersion[key]) {
            return false;
          }
          const oldVer = localVersion[key].split('.') as string[];
          const newVer = item.version.split('.') as string[];
          let result = false;
          const length = Math.max(oldVer.length, newVer.length);
          for (let i = 0; i < length; i++) {
            if (oldVer[i] !== newVer[i]) {
              result = result || oldVer[i] === undefined || oldVer[i] < newVer[i];
            }
          }
          return result;
        });

        if (notice) {
          console.warn(
            '--------------------------------------------------------\n',
            '[antd-mobile-upgrade-tip] Notice:\n',
            `${notice}\n`,
            '--------------------------------------------------------',
          );
        }

        if (tipComponents.length > 0) {
          console.warn(
            '--------------------------------------------------------\n',
            '[antd-mobile-upgrade-tip] some components is expired:\n',
            '\n',
            ...tipComponents
              .map(newData => {
                const key = newData.name;
                return `${key}: ${localVersion[key]} => ${newData.version} ${newData.tip} ${newData.url}\n`;
              }),
            '\n',
            '[you can reinstall node_modules to upgrade all of them.]\n',
            '[about this] http://beta.mobile.ant.design/docs/react/upgrade-tip-cn\n',
            '--------------------------------------------------------',
          );
        }
      }).catch(() => { });
  }
}
