import React, {PropTypes} from 'react';

const Flex = React.createClass({
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
      <div className={prefixCls + '-flexbox'}>
        {children}
      </div>
    );
  }
});

const Item = React.createClass({
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
      <div className={prefixCls + '-flexbox-item'}>{children}</div>
    );
  }
});

Flex.Item = Item;

module.exports = Flex;
