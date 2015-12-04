import React, {PropTypes} from 'react';
const ListHeader = React.createClass({
  propTypes: {
    label: PropTypes.string,
    style: PropTypes.object,
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      didMount(){
      }
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  render(){
    return (
      <div className="am-list-header" style={this.props.style}>{this.props.label}</div>
    );
  }
});
module.exports = ListHeader;
