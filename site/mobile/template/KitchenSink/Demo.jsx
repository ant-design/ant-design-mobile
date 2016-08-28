import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import { Link } from 'react-router';
import { Drawer, List, Icon } from 'antd-mobile';
import * as utils from '../../../theme/template/utils';

export function collect(nextProps, callback) {
  const componentsList = utils.collectDocs(nextProps.data.components);

  const moduleDocs = [
    ...utils.collectDocs(nextProps.data.docs.react),
    ...componentsList,
    /* eslint-disable new-cap */
    nextProps.data.CHANGELOG(),
    /* eslint-enable new-cap */
  ];

  // const componentName = nextProps.params.component;
  const componentName = nextProps.params.component;
  const demos = nextProps.utils.get(nextProps.data, ['components', componentName, 'demo']);
  const listDemos = nextProps.utils.get(nextProps.data, ['components', 'list-view', 'demo']);
  const drawerDemos = nextProps.utils.get(nextProps.data, ['components', 'drawer', 'demo']);

  const promises = [Promise.all(componentsList), Promise.all(moduleDocs)];

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

  promises.push(Promise.all(
    Object.keys(listDemos).map((key) => {
      if (typeof listDemos[key] === 'function') {
        return listDemos[key]();
      /* eslint-disable no-else-return */
      } else {
        return listDemos[key].web();
      }
    }))
  );

  promises.push(Promise.all(
    Object.keys(drawerDemos).map((key) => {
      if (typeof drawerDemos[key] === 'function') {
        return drawerDemos[key]();
      /* eslint-disable no-else-return */
      } else {
        return drawerDemos[key].web();
      }
    }))
  );

  Promise.all(promises)
    .then((list) => callback(null, {
      ...nextProps,
      components: list[0],
      moduleData: list[1],
      demos: list[2],
      listDemos: list[3],
      drawerDemos: list[4],
    }));
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
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

  render() {
    const { demos, listDemos, drawerDemos } = this.props;
    const name = this.props.params.component;

    const demoSort = demos.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));

    const lists = {};
    this.props.components.forEach(i => {
      const meta = i.meta;
      if (!lists[meta.category]) {
        lists[meta.category] = [];
      }
      lists[meta.category].push(meta);
    });

    const componentList = lists['UI Views'].concat(lists['UI Bars'])
    .concat(lists['UI Controls']).concat(lists.Other);

    let demoMeta;
    componentList.forEach((item) => {
      if (item.filename.split('/')[1] === name) {
        demoMeta = item;
      }
    });

    const whiteList = ['drawer', 'list-view'];
    const sidebar = (<div>
      <div className="demo-drawer-home">
        <Link to="/">Ant Design Mobile</Link>
      </div>
      {Object.keys(lists).map((cate, index) => (
        <List key={index} title={cate}>
          <List.Body>
            {
              lists[cate].map((item, ii) => {
                const fileName = item.filename.split('/')[1];
                let subDemos;
                if (fileName === 'drawer') {
                  subDemos = drawerDemos;
                } else {
                  subDemos = listDemos;
                }

                return (<List.Item key={ii}>
                  {
                    whiteList.indexOf(fileName) > -1 ?
                      (<List>
                        <List.Header style={{ padding: '5px 0' }}>{item.chinese}</List.Header>
                        {
                          subDemos.map((item1, index1) => (
                            <List.Item key={index1}>
                              <Link to={`/${fileName}/#${fileName}-demo-${item1.meta.order}`}>{item1.meta.title}</Link>
                            </List.Item>
                          ))
                        }
                      </List>) :
                      <Link to={`/${fileName}/`}>{item.chinese}</Link>}
                </List.Item>);
              })
            }
          </List.Body>
        </List>
      ))}
    </div>);

    const drawerProps = {
      open: this.state.open,
      position: 'left',
      onOpenChange: this.onOpenChange,
    };

    let drawerContent = (<div style={{ height: '100%' }}>
      <div className="demoName">
        {demoMeta.chinese}
        <p>{demoMeta.english}</p>
      </div>
      {
        demoSort.length > 1 &&
          <div className="demoLinks">
            <ul>
              {
                demoSort.map((item, index) => (
                  <li key={index}>
                    <a href={`${window.location.protocol}//${window.location.host}/kitchen-sink/${name}/#${name}-demo-${index}`}>{item.meta.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
      }
      {
        demoSort.map((i, index) => (
          <div className="demo-preview-item"id={`${name}-demo-${index}`} key={index}>
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
    return (
      <div id={name}>
        <div className="demo-drawer-trigger">
          <span onClick={this.onOpenChange}><Icon type="bars" /></span>
        </div>
        <div className="demo-drawer-container">
          <Drawer style={{ minHeight: document.documentElement.clientHeight }}
            sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}
          >
            {drawerContent}
          </Drawer>
        </div>
      </div>
    );
  }
}
