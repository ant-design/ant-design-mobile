import React from 'react';
const {PropTypes} = React;
const ListHeader = React.createClass({
  propTypes: {
    label: PropTypes.string,
    style: PropTypes.object,
    didMount: PropTypes.func,
  },
  componentDidMount() {
    if(!!this.props.didMount) {
      this.props.didMount(this);
    }
  },
  render(){
    return (
      <div className="am-list-header" style={this.props.style}>{this.props.children}</div>
    );
  }
});
module.exports = ListHeader;
