import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import classNames from 'classnames';
import * as utils from '../../../theme/template/utils';

import { NavBar, ActionSheet, Icon } from 'antd-mobile';

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

  Promise.all(promises)
    .then((list) => callback(null, {
      ...nextProps,
      components: list[0],
      moduleData: list[1],
      demos: list[2],
    }));
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.getCurrent(props.params.index) || 0,
      customNavBar: null,
    };
  }

  getCurrent = (name) => {
    const demoSort = this.props.demos.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));

    let currentIndex;
    demoSort.forEach((i, index) => {
      const fileArr = i.meta.filename.split('/');
      const filename = fileArr[fileArr.length - 1].split('.')[0];
      if (filename === name) {
        currentIndex = index;
      }
    });

    return currentIndex;
  }

  showActionSheet =() => {
    if (this.actionSheetShown) {
      ActionSheet.close();
      this.actionSheetShown = false;
      return;
    }

    const actionArr = [];
    const demoSort = this.props.demos.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));
    demoSort.forEach((demo, index) => {
      actionArr[index] = demo.meta.title;
    });
    actionArr.push('取消');

    this.actionSheetShown = true;
    ActionSheet.showActionSheetWithOptions({
      options: actionArr,
      cancelButtonIndex: actionArr.length - 1,
      maskClosable: true,
    },
    (buttonIndex) => {
      if (buttonIndex < actionArr.length - 1) {
        this.setState({
          current: buttonIndex,
          customNavBar: this.getNavBar(buttonIndex),
        });
      }
    });
  }

  demoPrev = () => {
    const current = this.state.current - 1;
    this.setState({
      current,
      customNavBar: this.getNavBar(current),
    });
  }

  demoNext = () => {
    const current = this.state.current * 1 + 1;
    this.setState({
      current,
      customNavBar: this.getNavBar(current),
    });
  }

  getNavBar(index) {
    const demos = this.props.demos;
    const demoSort = demos.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));
    /* eslint-disable no-nested-ternary */
    let leftContent = self === top || top.name === '__spe' ?
      <a href="/kitchen-sink" style={{ color: '#2db7f5', textDecoration: 'none', transition: 'color .3s ease' }}>首页</a> :
        (index > 0 ?
          <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.demoPrev}>
            上页
          </span> :
          null
        );

    let rightContent = index < demos.length - 1 ?
      <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.demoNext}>下页</span> :
      null;

    const customNavBar = (
      <NavBar iconName={false} leftContent={leftContent} rightContent={rightContent}>
        {
          demoSort.length > 1 ?
            <span onClick={this.showActionSheet} style={{ cursor: 'pointer' }}>
              {`${demoSort[index].meta.title}`} <Icon type="down" className="nav-arrow-down" />
            </span> :
            <span>
              {`${demoSort[index].meta.title}`}
            </span>
        }
      </NavBar>
    );
    return customNavBar;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: this.getCurrent(nextProps.params.index),
      customNavBar: this.getNavBar(nextProps.params.index),
    });
  }

  componentDidMount() {
    const current = this.state.current;
    /* eslint react/no-did-mount-set-state:0 */
    this.setState({
      customNavBar: this.getNavBar(current),
    });
    if (ActionSheet.close) {
      ActionSheet.close();
    }
  }

  render() {
    const { demos } = this.props;
    const { current } = this.state;
    const name = this.props.params.component;

    const demoSort = demos.sort((a, b) => (
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ));

    demoSort[current].preview.call(this);
    const customNavFlag = this.customNavFlag;

    return (
      <div id={name}>
        <div id="demoNavbar" style={{ position: 'fixed', width: '100%', zIndex: 9998, top: 0 }}>
          {
            !customNavFlag ?
            this.state.customNavBar :
            null
          }
        </div>

        {demoSort.map((i, index) => {
          let isShow = current - index === 0;
          // ListView 组件要占用全屏、不能多实例共存（用 destroyComponent 做标记）
          if (i.meta.destroyComponent && window.name !== 'demoFrame') {
            isShow = this.props.params.index === undefined && current === index;
          }

          const previewItemClass = classNames({
            'demo-preview-item': true,
            'demo-preview-item-custom': !!customNavFlag,
            show: isShow,
            hide: !isShow,
          });

          return (
            <div className={previewItemClass} id={`${name}-demo-${index}`} key={index}>
              {!i.meta.destroyComponent || isShow ? i.preview(React, ReactDOM) : null}
              {!!i.style ? <style dangerouslySetInnerHTML={{ __html: i.style }} /> : null}
            </div>
          );
        })}
      </div>
    );
  }
}
