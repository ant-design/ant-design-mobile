import React from 'react';

const Tab = React.createClass({
  render() {
    return (
      <div className="am-tab">
        {this.props.children}
      </div>
    );
  }
});
module.exports = Tab;
