import collect from 'bisheng/collect';
import MainContent from './MainContent';

// locale copy from layout
const locale = (
  window.localStorage &&
    localStorage.getItem('locale') !== 'en-US'
) ? 'zh-CN' : 'en-US';


export default collect(async (nextProps) => {
  const pageData = nextProps.location.pathname === 'changelog' ? nextProps.pageData.CHANGELOG : nextProps.pageData;
  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }

  const pageDataPromise = typeof pageData === 'function' ?
    pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const promises = [pageDataPromise];

  const pathname = nextProps.location.pathname;
  const demos = nextProps.utils.get(
    nextProps.data, [...pathname.split('/'), 'demo'],
  );
  if (demos) {
    promises.push(demos());
  }
  const list = await Promise.all(promises);
  return {
    localizedPageData: list[0],
    demos: list[1],
  };
})(MainContent);
