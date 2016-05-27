import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

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
      };
    },

    showActionSheet() {
      let actionArr = [];
      demoSort.map((demo, index) =>{
        actionArr[index] = demo.meta.title;
      })

      ActionSheet.showActionSheetWithOptions({
        options: actionArr,
        cancelButtonIndex: actionArr.length - 1,
        title: '切换演示',
        message: '点击可切换demo演示',
        maskClosable: true,
      },
      (buttonIndex) => {
        this.setState({
          current: buttonIndex,
          customNavBar: this.getNavBar(buttonIndex),
        });
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
        <a href="/kitchen-sink.html">首页</a> :
          (index > 0 ? 
          <span style={{ fontSize: 12, cursor: 'pointer' }} onClick={ this.demoPrev }>
            上页
          </span> :
          null);

      let rightContent = index < demos.length - 1 ? 
        <span style={{ fontSize: 12, cursor: 'pointer' }} onClick={ this.demoNext }>下页</span> :
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
        <div id="demoNavbar">
          { this.state.customNavBar }
        </div>
        {demoSort.map((i, index) => {
          return (<div className={ !current || (current - index === 0) ? 'demo-preview-item show': 'demo-preview-item hide' }
            id={`${path}-demo-${index}`} key={index} style={{ height: '450px', overflowY: 'scroll' }}>
            {React.cloneElement(i.preview, {
              onNavBarChange: () => { console.log('ccc', this); this.setState({ NavBarChange: !this.state.NavBarChange }); },
            })}
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
