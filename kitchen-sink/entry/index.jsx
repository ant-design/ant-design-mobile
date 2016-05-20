import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../components/App';
import demosList from '../../_data/demos-list';

if((/iphone|ipad/i).test(navigator.userAgent)) {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      // FastClick.attach(document.body);
    }, false);
  }
}
window.scrolltopNumber = 0;


function createComponent(demos, path) {
  return React.createClass({
    render() {
      return (<div id={path}>
        <h3>{path}</h3>
        {demos.map((i, index) => {
          return (<div id={`${path}-demo-${index}`} key={index}>
            {i.preview}
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
