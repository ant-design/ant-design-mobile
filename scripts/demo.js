window.require = function (path) {
  if (path in window) {
    return window[path];
  } else {
    throw 'There should not have modules here: ' + path;
  }
};
require('../components/style');
require('../components/flex/style');
require('../components/list/style');
require('../components/white-space/style');
require('../components/wing-blank/style');

require('../components/button/style');
require('../components/captcha-item/style');
require('../components/checkbox-item/style');
require('../components/input-item/style');
require('../components/list-date-picker/style');
require('../components/list-picker/style');
require('../components/list-selector/style');
require('../components/modal/style');
require('../components/search-bar/style');
require('../components/select-item/style');
require('../components/switch-item/style');
require('../components/textarea-item/style');

require('../components/article/style');
require('../components/card/style');
require('../components/message/style');
require('../components/page-result/style');
require('../components/process/style');
require('../components/result/style');
require('../components/toast/style');
require('../components/top-notice/style');

require('../components/segmented-control/style');
require('../components/tab/style');

window.Clip = require('./clip');
window['react-router'] = require('react-router');
var antm = require('../index');
var React = require('react');
var ReactDOM = require('react-dom');
window.antm = antm;
window.React = React;
window.ReactDOM = ReactDOM;
window['object-assign'] = require('object-assign');
window['classnames'] = require('classnames');
window['promise'] = require('promise');
window['rc-form'] = require('rc-form');
window.DISTRICT = require('./district');

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
          <input className="address-bar" defaultValue="http://www.example.com"/>
        </header>
        <section className="window-content">
          {this.props.children}
        </section>
      </article>
    );
  }
});

module.exports = antm;
