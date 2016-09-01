import React from 'react';
import Promise from 'bluebird';
import MainContent from './MainContent';

// locale copy from layout
const locale = (
  window.localStorage &&
    localStorage.getItem('locale') !== 'en-US'
) ? 'zh-CN' : 'en-US';

export function collect(nextProps, callback) {
  const pageData = nextProps.location.pathname === 'changelog' ?
          nextProps.data.CHANGELOG : nextProps.pageData;
  const pageDataPromise = typeof pageData === 'function' ?
          pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const promises = [pageDataPromise];

  const pathname = nextProps.location.pathname;
  const demos = nextProps.utils.get(
    nextProps.data, [...pathname.split('/'), 'demo']
  );

  if (demos) {
    promises.push(Promise.all(
      Object.keys(demos).map((key) => {
        if (typeof demos[key] === 'function') {
          return demos[key]();
        /* eslint-disable no-else-return */
        } else {
          return demos[key].web();
        }
      })
    ));
  }
  Promise.all(promises)
    .then((list) => callback(null, {
      ...nextProps,
      localizedPageData: list[0],
      demos: list[1],
    }));
}

export default (props) => (
  <MainContent {...props} />
);
