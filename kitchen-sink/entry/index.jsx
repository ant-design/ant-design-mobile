import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../components/App';
import demosList from '../../_data/demos-list';
import { NavBar } from 'antm';

if((/iphone|ipad/i).test(navigator.userAgent)) {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      // FastClick.attach(document.body);
    }, false);
  }
}
window.scrolltopNumber = 0;

window.react = React;
window['react-dom'] = ReactDOM;

window.navbar = <NavBar />;
window.demosList = demosList;
window.sortFn = demos => demos.sort((a, b) => {
  return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
});

function createComponent(demos, path) {
  const demoSort = window.sortFn(demos);
  return React.createClass({
    render() {
      return (<div id={path}>
        <div id="demoNavbar"></div>
        {demoSort.map((i, index) => {
          return (<div className={`demo-preview-item demo-preview-item-${index}`} id={`${path}-demo-${index}`} key={index}>
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
      return (<Route key={index} path={`/${path}`} component={createComponent(demosList[i], path)} />);
    })]}
  </Router>
);

ReactDOM.render(pageRouter, document.getElementById('react-content'));
