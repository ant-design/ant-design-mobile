import React, {PropTypes} from 'react';

const ListBody = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
    };
  },
  render(){
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list-body'}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListBody;
