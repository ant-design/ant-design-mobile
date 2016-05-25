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
        current: this.props.params.index,
        customNavBar: null,
      }
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

    getNavBar(index) {
      let customNavBar = <NavBar iconName={false}>
        {
        demoSort.length > 1 ?
        <span onClick={this.showActionSheet}> 
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
            id={`${path}-demo-${index}`} key={index} style={{ height: '520px', overflowY: 'scroll' }}>
            {i.preview}
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
