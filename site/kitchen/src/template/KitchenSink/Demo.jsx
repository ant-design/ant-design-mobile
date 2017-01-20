import React from 'react';
import ReactDOM from 'react-dom';
import scrollIntoView from 'dom-scroll-into-view';
import config from '../../';

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
  const demos = nextProps.utils.get(nextProps.data, ['components', nextProps.params.component, 'demo']);
  if (demos) {
    promises.push(demos());
  }
  Promise.all(promises)
    .then((list) => {
      callback(null, {
        ...nextProps,
        localizedPageData: list[0],
        demos: list[1],
      });
    });
}

export default class Home extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (location.hash && document.querySelector(location.hash)) {
        scrollIntoView(document.querySelector(location.hash), document.body, {
          alignWithTop: true,
        });
      }
    }, 200);
  }
  render() {
    const { demos, location, picked } = this.props;

    let demoMeta;
    const name = this.props.params.component;
    picked.components.forEach(i => {
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
