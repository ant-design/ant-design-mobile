import React, {PropTypes} from 'react';
import classNames from 'classnames';

const Flex = React.createClass({
  propTypes: {
    align : PropTypes.string,
  },
  getDefaultProps() {
    return {
      align: 'middle',
    };
  },
  render() {
    let { align, className } = this.props;

    const wrapCls = classNames({
      'am-flexbox': true,
      'am-flexbox-top': align === 'top',
      'am-flexbox-middle': align === 'middle',
      'am-flexbox-bottom': align === 'bottom',
      [className] : className
    });

    return (
      <div className={wrapCls}>
        {this.props.children}
      </div>
    );
  }
});

const Item = React.createClass({
  render() {
    const { children, className } = this.props;
    const wrapCls = classNames({
      'am-flexbox-item': true,
      [className] : className
    });
    return (
      <div className={wrapCls}>{children}</div>
    );
  }
});

Flex.Item = Item;

module.exports = Flex;
