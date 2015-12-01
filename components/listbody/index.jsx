import React from 'react';
const ListBody = React.createClass({
  render: function(){
    return (
      <div className="am-list-body">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListBody;
