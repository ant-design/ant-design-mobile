import React, {PropTypes} from 'react';

const ListHeader = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
    };
  },
  render(){
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list-header'} style={this.props.style}>{this.props.children}</div>
    );
  }
});
module.exports = ListHeader;
