import React from 'react';
const {PropTypes} = React;
const ListWarp = React.createClass({
  propTypes: {
    didMount: PropTypes.func,
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount(this);
    }
  },
  render: function(){
		return (
			<div data-am-mode="flat chip form 43px" className="am-list">
        {this.props.children}
			</div>
		);
  }
});

module.exports = ListWarp;
