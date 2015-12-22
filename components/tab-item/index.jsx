import React, {PropTypes} from 'react';
function noop() {}

const TabItem = React.createClass({
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
    if(this.props.selected) {
      return (
        <div className="am-tab-item" data-tab="selected" onClick={this._handleClick}>{this.props.children}</div>
      );
    } else {
      return (
        <div className="am-tab-item" onClick={this._handleClick}>{this.props.children}</div>
      );
    }
  }
});
module.exports = TabItem;
