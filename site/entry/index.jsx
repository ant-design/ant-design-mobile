import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, useRouterHistory } from 'react-router';

import * as utils from './utils';
import '../common/lib';
import App from '../component/App';
import Home from '../component/Home/index';
import reactComponents from '../../_data/react-components';
import pattern from '../../_data/pattern';
import config from '../website.config';

import { createHashHistory } from 'history';

// useRouterHistory creates a composable higher-order function
const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

// TODO: pack dependencies with atool build
// Expose React, ReactDOM
window.react = React;
window['react-dom'] = ReactDOM;


const ReactComponents = utils.generateContainer(reactComponents);
const Pattern = utils.generateContainer(pattern);
const redirects = Object.keys(config.redirects).map((from, index) => {
  return (<Redirect
    from={from}
    to={config.redirects[from]}
    key={index}
  />);
});

// Enable Google Analytics
if (!location.port) {
  /* eslint-disable */
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-72788897-1', 'auto');
  ga('send', 'pageview');

  hashHistory.listen((loc) => {
    ga('send', 'pageview', loc.pathname + loc.search);
  });
  /* eslint-enable */
}

/* eslint no-extend-native: 0 */
if (!Array.prototype.find) {
  Array.prototype.find = function arrayFind(predicate, ...args) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    const list = Object(this);
    const length = list.length >>> 0;
    const thisArg = args[1];
    let value;

    for (let i = 0; i < length; i++) {
      if (i in list) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
    }
    return undefined;
  };
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute
        component={Home}
      />
      <Route path="components" component={ReactComponents}>
        { utils.generateIndex(reactComponents) }
        <Route
          path=":children"
          component={utils.getChildrenWrapper(reactComponents)}
        />
      </Route>
      <Route path="docs/pattern" component={Pattern}>
        { utils.generateIndex(pattern) }
        <Route
          path=":children"
          component={utils.getChildrenWrapper(pattern)}
        />
      </Route>
      { redirects }
    </Route>
  </Router>
  , document.getElementById('react-content')
);
