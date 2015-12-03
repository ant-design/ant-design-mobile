import React from 'react';
const {PropTypes} = React;
const ListBody = React.createClass({
  propTypes: {
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
      <div className="am-list-body">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListBody;
