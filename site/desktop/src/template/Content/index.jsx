import React from 'react';
import MainContent from './MainContent';

// locale copy from layout
const locale = (
  window.localStorage &&
    localStorage.getItem('locale') !== 'en-US'
) ? 'zh-CN' : 'en-US';

export function collect(nextProps, callback) {
  const pageData = nextProps.pageData;
  if (!pageData) {
    callback(404, nextProps);
    return;
  }

  const pageDataPromise = typeof pageData === 'function' ?
    pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const promises = [pageDataPromise];

  const pathname = nextProps.location.pathname;
  const demos = nextProps.utils.get(
    nextProps.data, [...pathname.split('/'), 'demo']
  );
  if (demos) {
    promises.push(demos());
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
