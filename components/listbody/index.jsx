import React from 'react';
const {PropTypes} = React;
const ListBody = React.createClass({
  propTypes: {
    didMount: PropTypes.func,
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount.call(this);
    }
  },
  render: function(){
    return (
      <div className="am-list-body">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListBody;
