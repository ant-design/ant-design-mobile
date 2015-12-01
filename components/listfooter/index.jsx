import React from 'react';
const {PropTypes} = React;
const ListFooter = React.createClass({
  propTypes: {
    label: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string
  },
  render: function(){
    let align = this.props.align === 'right' ? 'am-ft-right' : '';
    align = 'am-list-footer ' + align;
    return (
      <div className={align} style={this.props.style}>{this.props.label}</div>
    );
  }
});

module.exports = ListFooter;
