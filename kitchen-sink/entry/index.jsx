import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import './base.less';
import App from '../components/App';
import demosList from '../../_data/demos-list';
import { NavBar, ActionSheet, Icon } from 'antm';

if((/iphone|ipad/i).test(navigator.userAgent)) {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      // FastClick.attach(document.body);
    }, false);
  }
}

function createComponent(demos, path) {
  const demoSort = demos.sort((a, b) => {
    return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
  });
  return React.createClass({
    getInitialState() {
      return {
        current: this.props.params.index || 0,
        customNavBar: null,
        NavBarChange: false,
        hideNavBar: false,
      };
    },

    showActionSheet() {
      let actionArr = [];
      demoSort.map((demo, index) =>{
        actionArr[index] = demo.meta.title;
      }) 
      actionArr.push("取消");

      ActionSheet.showActionSheetWithOptions({
        options: actionArr,
        cancelButtonIndex: actionArr.length - 1,
        maskClosable: true,
      },
      (buttonIndex) => {
        if(buttonIndex < actionArr.length -1 ){
        this.setState({
          current: buttonIndex,
          customNavBar: this.getNavBar(buttonIndex),
        });
      }
      });
    },

    demoPrev() {
      const current = this.state.current - 1;
      this.setState({
        current,
        customNavBar: this.getNavBar(current),
      })
    },

    demoNext() {
      const current = this.state.current*1 + 1;
      this.setState({
        current,
        customNavBar: this.getNavBar(current),
      })
    },

    getNavBar(index) {
      let leftContent = self === top ?
        <a href="/kitchen-sink.html" style={{ color: '#2db7f5', textDecoration: 'none', transition: 'color .3s ease' }}>首页</a> :
          (index > 0 ?
          <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={ this.demoPrev }>
            上页
          </span> :
          null);

      let rightContent = index < demos.length - 1 ?
        <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={ this.demoNext }>下页</span> :
        null;
      let customNavBar = <NavBar iconName={false} leftContent={leftContent} rightContent={rightContent}>
        {
        demoSort.length > 1 ?
        <span onClick={this.showActionSheet} style={{ cursor: 'pointer' }}>
          { `${demoSort[index].meta.title}` }  <Icon type="down" />
        </span> :
        <span>
        { `${demoSort[index].meta.title}` }
        </span>
        }
      </NavBar>;
      if (demoSort && demoSort[index].preview.type.customNavBar) {
        customNavBar = demoSort[index].preview.type.customNavBar;
      }
      return customNavBar;
    },
    componentWillReceiveProps(nextProps) {
      this.setState({
        current: nextProps.params.index,
        customNavBar: this.getNavBar(nextProps.params.index)
      })
    },
    componentDidUpdate(prevProps, prevState) {
      if (prevState.NavBarChange === !this.state.NavBarChange) {
        this.setState({
          customNavBar: this.getNavBar(this.state.current),
        });
      }
    },
    componentDidMount() {
      const current = this.state.current;
      this.setState({
        customNavBar: this.getNavBar(current),
      })
    },
    render() {
      const current = this.state.current;
      return (<div id={path}>
        <span style={{ position: 'fixed', zIndex: 9999, top: 0, left: 100, color: '#999' }}
          onClick={() => this.setState({ hideNavBar: !this.state.hideNavBar })}>
          {this.state.hideNavBar ? '⬇️' : '⬆️'}
        </span>
        <div id="demoNavbar" style={{ position: 'fixed', width: '100%', zIndex: 9998, top: 0,
          display: this.state.hideNavBar ? 'none' : 'block' }}>
          { this.state.customNavBar }
        </div>
        {demoSort.map((i, index) => {
          let isShow = !current || (current - index === 0);
          // ListView 组件要占用全屏、不能多实例共存（用 destroyComponent 做标记）
          if (i.meta.destroyComponent) {
            isShow = this.props.params.index == undefined && current === index ? true : false;
            console.log(isShow);
          }
          return (<div className={ isShow ? 'demo-preview-item show': 'demo-preview-item hide' }
            id={`${path}-demo-${index}`} key={index}>
            {!i.meta.destroyComponent || isShow ? React.cloneElement(i.preview, {
              onNavBarChange: () => { this.setState({ NavBarChange: !this.state.NavBarChange }); },
            }) : null}
            {
            !!i.style ?
            <style dangerouslySetInnerHTML={{ __html: i.style }} /> :
            null
            }
          </div>);
        })}
      </div>);
    }
  });
}

const pageRouter = (
  <Router history={hashHistory}>
    {[<Route key="app" path="/" component={App} />, ...Object.keys(demosList).map((i, index) => {
      const path = i.split('/')[1];
      return (<Route key={index} path={`/${path}`} component={createComponent(demosList[i], path)}>
          <Route path=":index" />
        </Route>);
    })]}
  </Router>
);

ReactDOM.render(pageRouter, document.getElementById('react-content'));
