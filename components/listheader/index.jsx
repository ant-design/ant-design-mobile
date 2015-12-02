import React from 'react';
const {PropTypes} = React;
const ListHeader = React.createClass({
  propTypes: {
    label: PropTypes.string,
    style: PropTypes.object,
    didMount: PropTypes.func,
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount.call(this);
    }
  },
  render: function(){
    return (
      <div className="am-list-header" style={this.props.style}>{this.props.label}</div>
    );
  }
});
module.exports = ListHeader;
