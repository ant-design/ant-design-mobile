import React, {PropTypes} from 'react';
import Tappable from 'react-tappable';
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
        <Tappable className="am-tab-item" onTap={this._handleClick} data-tab="selected">{children}</Tappable>
      );
    } else {
      return (
        <Tappable className="am-tab-item" onTap={this._handleClick}>{children}</Tappable>
      );
    }
  }
});

Tab.Item = Item;

module.exports = Tab;
