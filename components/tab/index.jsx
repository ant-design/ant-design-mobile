import React, {PropTypes} from 'react';
function noop() {}

const Tab = React.createClass({
  render() {
    const { children } = this.props;
    return (
      <div className="am-tab">
        {children}
      </div>
    );
  }
});

const Item = React.createClass({
  propTypes: {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      selected: false,
      onClick: noop,
    };
  },
  _handleClick() {
    this.props.onClick();
  },
  render() {
    const { selected, children } = this.props;
    if(selected) {
      return (
        <div className="am-tab-item" data-tab="selected" onClick={this._handleClick}>{children}</div>
      );
    } else {
      return (
        <div className="am-tab-item" onClick={this._handleClick}>{children}</div>
      );
    }
  }
});

Tab.Item = Item;

module.exports = Tab;
