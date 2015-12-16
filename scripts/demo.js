window.require = function(path) {
  if (path in window) {
    return window[path];
  } else {
    throw 'There should not have modules here: ' + path;
  }
};
window.Clip = require('./clip');
var antm = require('../index');
var React = require('react');
var ReactDOM = require('react-dom');
var semver = require('semver');
window.antm = antm;
window.React = React;
window.ReactDOM = ReactDOM;
window['object-assign'] = require('object-assign');
window['classnames'] = require('classnames');
window['promise'] = require('promise');
window['rc-form'] = require('rc-form');

window.BrowserDemo = React.createClass({
  render() {
    return (
      <article className="window-frame focus">
        <header className="top-bar">
          <div className="controls">
            <div className="control close"></div>
            <div className="control minify"></div>
            <div className="control expand"></div>
          </div>
          <input className="address-bar" defaultValue="http://www.example.com" />
        </header>
        <section className="window-content">
          {this.props.children}
        </section>
      </article>
    );
  }
});

module.exports = antm;
