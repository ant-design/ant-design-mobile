import React, {PropTypes} from 'react';

const Flex = React.createClass({
  propTypes: {
    align         : PropTypes.string,
  },
  getDefaultProps() {
    return {
      align: 'middle',
    };
  },
  render() {
    const { align } = this.props;
    const flexCls = 'am-flexbox am-flexbox-' + align;
    return (
      <div className={flexCls}>
        {this.props.children}
      </div>
    );
  }
});

const Item = React.createClass({
  render() {
    const { children } = this.props;
    return (
      <div className="am-flexbox-item">{children}</div>
    );
  }
});

Flex.Item = Item;

module.exports = Flex;
