/* eslint-disable no-useless-escape */
export function getMenuItems(moduleData, locale) {
  const menuMeta = moduleData.map(item => item.meta);
  const menuItems = {};
  menuMeta.sort(
    (a, b) => (a.order || 0) - (b.order || 0),
  ).forEach((meta) => {
    const category = (meta.category && meta.category[locale]) || meta.category || 'topLevel';
    if (!menuItems[category]) {
      menuItems[category] = {};
    }

    const type = meta.type || 'topLevel';
    if (!menuItems[category][type]) {
      menuItems[category][type] = [];
    }

    menuItems[category][type].push(meta);
  });
  return menuItems;
}

export function isZhCN(pathname) {
  return /-cn\/?$/.test(pathname);
}

export function getLocalizedPathname(path, zhCN) {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  if (!zhCN) { // to enUS
    return /\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '');
  } else if (pathname === '/') {
    return '/index-cn';
  } else if (pathname.endsWith('/')) {
    return pathname.replace(/\/$/, '-cn/');
  }
  return `${pathname}-cn`;
}

export function ping(callback) {
  // eslint-disable-next-line
  const url = 'https://private.alipay' + 'objects.com/alip' + 'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done;
  const finish = (status) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
}

export function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

export function collectDocs(docs) {
  // locale copy from layout
  const locale = (window.localStorage && localStorage.getItem('locale') !== 'en-US') ?
    'zh-CN' : 'en-US';
  const docsList = Object.keys(docs)
    .map(key => docs[key])
    .map((value) => {
      if (typeof value !== 'function') {
        return value[locale] || value.index[locale] || value.index;
      }
      return value;
    })
    .map(fn => fn());
  return docsList;
}

export function getQuery(key) {
  const val = window.location.search
    .replace(/^\?/, '')
    .split('&')
    .filter(item => item)
    .map(item => item.split('='))
    .find(item => item[0] && item[0] === key);

  return val && val[1];
}

export const head =
`<script>
  (function (baseFontSize, fontscale) {
    var _baseFontSize = baseFontSize || 100;
    var _fontscale = fontscale || 1;
    var win = window;
    var doc = win.document;
    var ua = navigator.userAgent;
    var matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
    var UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
    var isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80;
    var isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
    var dpr = win.devicePixelRatio || 1;
    if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
      // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
      dpr = 1;
    }
    var scale = 1 / dpr;

    var metaEl = doc.querySelector('meta[name="viewport"]');
    if (!metaEl) {
      metaEl = doc.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      doc.head.appendChild(metaEl);
    }
    metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);
    doc.documentElement.style.fontSize = _baseFontSize / 2 * dpr * _fontscale + 'px';
    window.viewportScale = dpr;
  })();
  if(!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
  }
  </script>`;
