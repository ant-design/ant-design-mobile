import React from 'react';
const {PropTypes} = React;
const ListItem = React.createClass({
  propTypes: {
    label: PropTypes.string,
  },
  render: function(){
    return (
      <a href="#" className="am-list-item">
        <div className="am-list-content">{this.props.content}</div>
        <div className="am-list-extra">{this.props.extra}</div>
        <div className="am-list-arrow"><span className="am-icon" data-am-mode="arrow-horizontal"></span></div>
      </a>
    );
  }
});
module.exports = ListItem;
