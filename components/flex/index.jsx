import React from 'react';

const Flex = React.createClass({
  render() {
    return (
      <div className="am-flexbox">
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
