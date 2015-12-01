import React from 'react';
const ListWarp = React.createClass({
  render: function(){
		return (
			<div data-am-mode="flat chip form 43px" className="am-list">
        {this.props.children}
			</div>
		);
  }
});

module.exports = ListWarp;
