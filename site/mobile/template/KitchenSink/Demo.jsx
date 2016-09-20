import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import { Link } from 'react-router';
import { Drawer, List, Icon } from 'antd-mobile';

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
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      triggerActive: false,
      activeIdx: -1,
    };
  }

  componentWillReceiveProps = () => {
    this.setState({
      open: false,
    });
  }

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }

  onTouchStart = () => {
    this.setState({
      triggerActive: true,
    });
  }

  onTouchEnd = () => {
    this.setState({
      triggerActive: false,
    });
  }

  render() {
    const isPc = !/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    const demos2 = this.props.demos;
    const demos = [];

    Object.keys(demos2).forEach((k) => {
      demos.push(demos2[k]);
    });

    const name = this.props.params.component;

    const demoSort = demos.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));

    const { location, picked } = this.props;
    const components = picked.components;

    const lists = {};
    components.forEach(i => {
      const meta = i.meta;
      if (!lists[meta.category]) {
        lists[meta.category] = [];
      }
      lists[meta.category].push(meta);
    });

    const componentList = lists['UI Views'].concat(lists['UI Bars'])
      .concat(lists['UI Controls']).concat(lists.Others);

    let demoMeta;
    componentList.forEach((item) => {
      if (item.filename.split('/')[1] === name) {
        demoMeta = item;
      }
    });

    const whiteList = ['drawer', 'list-view', 'refresh-control'];
    const drawerDemos = [
      { order: 0, title: '基本' },
      { order: 1, title: '嵌入文档模式' },
    ];
    const listDemos = [
      { order: 0, title: '子容器' },
      { order: 1, title: 'body 容器' },
      { order: 2, title: '吸顶（body 容器）' },
      { order: 3, title: 'IndexedList' },
      { order: 4, title: 'IndexedList 吸顶' },
    ];
    const refreshControlDemos = [
      { order: 0, title: '基本' },
      { order: 1, title: 'ListView RefreshControl' },
    ];

    const sidebar = (<div>
      <div className="demo-drawer-home">
        <Link to="/">Ant Design Mobile</Link>
      </div>
      {Object.keys(lists).map((cate, index) => (
        <List key={index} title={cate}>
          {
            lists[cate].map((item, ii) => {
              const fileName = item.filename.split('/')[1];

              let subDemos;
              if (fileName === 'drawer') {
                subDemos = drawerDemos;
              } else if (fileName === 'refresh-control') {
                subDemos = refreshControlDemos;
              } else {
                subDemos = listDemos;
              }

              return (<List.Item key={ii}>
                {
                  whiteList.indexOf(fileName) > -1 ?
                    (<List
                      renderHeader={() =>
                        (
                        <div style={{ padding: '5px 0' }}>
                          <span className={name === fileName ? 'demo-current' : ''}>
                            {item.english}
                            <span className="demo-chinese">{item.chinese}</span>
                          </span>
                        </div>
                        )
                      }
                    >
                      {
                        subDemos.map((item1, index1) => (
                          <List.Item key={index1}>
                            <Link to={`/${fileName}/#${fileName}-demo-${item1.order}`}>{item1.title}</Link>
                          </List.Item>
                        ))
                      }
                    </List>) :
                    <Link to={`/${fileName}/`}>
                      <span className={name === fileName ? 'demo-current' : ''}>
                        {item.english} <span className="demo-chinese">{item.chinese}</span>
                      </span>
                    </Link>}
              </List.Item>);
            })
          }
        </List>
      ))}
    </div>);

    const drawerProps = {
      open: this.state.open,
      position: 'left',
      onOpenChange: this.onOpenChange,
    };

    let drawerContent = (<div style={{ height: '100%' }} className="demo">
      <div className="demoName">
        {demoMeta.chinese}
        <p>{demoMeta.english}</p>
      </div>
      {
        demoSort.length > 1 && (<div className="demoLinks">
          <ul>
            {
              demoSort.map((item, index) => (
                <li key={index}>
                  <a
                    href={`${window.location.protocol}//${window.location.host}/kitchen-sink/${name}/#${name}-demo-${index}`}
                  >
                    {item.meta.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>)
      }
      {
        demoSort.map((i, index) => (
          <div className="demo-preview-item" id={`${name}-demo-${index}`} key={index}>
            <div className="demoTitle">{i.meta.title}</div>
            {i.preview(React, ReactDOM)}
            {i.style ? <style dangerouslySetInnerHTML={{ __html: i.style }} /> : null}
          </div>
        ))
      }
    </div>);

    if (whiteList.indexOf(name) > -1) {
      const arr = location.hash.substr(1).split('-demo-');
      const i = demoSort[arr.length > 1 ? arr[1] : 0];
      drawerContent = (<div style={{ height: '100%' }}>
        {i.preview(React, ReactDOM)}
        {i.style ? <style dangerouslySetInnerHTML={{ __html: i.style }} /> : null}
      </div>);
      if (name === 'list-view') {
        drawerProps.className = 'spe-drawer';
      }
    }
    // document.documentElement.clientHeight to
    // remove height of toolbars, address bars and navigation (android)
    const minHeightStyle = isPc ? null : { minHeight: document.documentElement.clientHeight };

    const triggerActive = this.state.triggerActive;

    return (
      <div id={name}>
        <div className="demo-drawer-trigger">
          <span onClick={this.onOpenChange} style={triggerActive ? { color: '#108ee9' } : {}}>
            <Icon onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} type="bars" />
          </span>
        </div>
        <div className="demo-drawer-container">
          <Drawer
            style={minHeightStyle}
            sidebar={sidebar}
            dragHandleStyle={{ display: 'none' }}
            {...drawerProps}
          >
            {drawerContent}
          </Drawer>
        </div>
      </div>
    );
  }
}
