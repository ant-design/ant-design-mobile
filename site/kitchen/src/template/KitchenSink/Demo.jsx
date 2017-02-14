/* eslint react/no-danger: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import collect from 'bisheng/collect';

const locale = (
  window.localStorage &&
  localStorage.getItem('locale') !== 'en-US'
) ? 'zh-CN' : 'en-US';

@collect(async (nextProps) => {
  const pageData = nextProps.pageData;
  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }
  const pageDataPromise = typeof pageData === 'function' ?
    pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const promises = [pageDataPromise];
  const demos = nextProps.utils.get(nextProps.data, ['components', nextProps.params.component, 'demo']);
  if (demos) {
    promises.push(demos());
  }
  const list = await Promise.all(promises);

  return {
    localizedPageData: list[0],
    demos: list[1],
  };
})
export default class Home extends React.Component {
  componentDidMount() {
    // this.componentDidUpdate();
  }
  componentDidUpdate() {
    // 暂时好像不需要？
    // setTimeout(() => {
    //   if (location.hash && document.querySelector(location.hash)) {
    //     debugger
    //     scrollIntoView(document.querySelector(location.hash), document.body, {
    //       alignWithTop: true,
    //     });
    //   }
    // }, 200);
  }
  render() {
    const { demos, location, picked, themeConfig: config } = this.props;

    let demoMeta;
    const name = this.props.params.component;
    picked.components.forEach((i) => {
      const meta = i.meta;
      if (meta.filename.split('/')[1] === name) {
        demoMeta = meta;
      }
    });

    const demoArr = [];
    Object.keys(demos).forEach((k) => {
      demoArr.push(demos[k]);
    });
    let demoSort = demoArr.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));

    // 处理 config.indexDemos 里的组件 demo ，使其能只展示一个
    const hashArr = location.hash.split(config.hashSpliter);
    const order = hashArr[1] && parseInt(hashArr[1], 10);
    if (location.hash && config.indexDemos.indexOf(name) > -1) {
      demoSort = demoSort.filter(i => parseInt(i.meta.order, 10) === order);
    }

    // document.documentElement.clientHeight to
    // remove height of toolbars, address bars and navigation (android)
    const style = {};
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      style.minHeight = document.documentElement.clientHeight;
    }

    const isLocalMode = window.location.port;
    const linkUrl = isLocalMode ? '' : 'kitchen-sink/';

    return (
      <div id={name} style={style} className="demo">
        <div className="demoName">
          <a className="icon" href={`/${linkUrl}${window.location.search}`} />
          {demoMeta.english}
          <span className="ch">{demoMeta.chinese}</span>
        </div>
        {
          demoSort.map((i, index) => (
            <div className="demo-preview-item" id={`${name}-demo-${i.meta.order}`} key={index}>
              <div className="demoTitle">{i.meta.title}</div>
              {i.preview(React, ReactDOM)}
              {i.style ? <style dangerouslySetInnerHTML={{ __html: i.style }} /> : null}
            </div>
          ))
        }
      </div>
    );
  }
}
