import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './tab.less';
function noop() {}

const Tab = React.createClass({
  render() {
    const { children, className } = this.props;
    const wrapCls = classNames({
      'am-tab': true,
      [className] : className
    });

    return (
      <div className={wrapCls}>
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
    const { selected, children, className } = this.props;
    const wrapCls = classNames({
      'am-tab-item': true,
      'am-tab-item-selected': selected,
      [className] : className
    });

    return (<div className={wrapCls} onClick={this._handleClick}>{children}</div>);
  }
});

Tab.Item = Item;

module.exports = Tab;
