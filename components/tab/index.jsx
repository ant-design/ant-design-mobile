import React, {PropTypes} from 'react';
function noop() {}

const Tab = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
    };
  },
  render() {
    const { prefixCls, children } = this.props;
    return (
      <div className={prefixCls + '-tab'}>
        {children}
      </div>
    );
  }
});

const Item = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      selected: false,
      onClick: noop,
    };
  },
  _handleClick() {
    this.props.onClick();
  },
  render() {
    const { prefixCls, selected, children } = this.props;
    if(selected) {
      return (
        <div className={prefixCls + '-tab-item'} data-tab="selected" onClick={this._handleClick}>{children}</div>
      );
    } else {
      return (
        <div className={prefixCls + '-tab-item'} onClick={this._handleClick}>{children}</div>
      );
    }
  }
});

Tab.Item = Item;

module.exports = Tab;
