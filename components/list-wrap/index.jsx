import React, {PropTypes} from 'react';

const ListWarp = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    isFormList: PropTypes.bool,
    isIconList: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      isFormList: true,
      isIconList: false,
    };
  },
  render() {
    let {prefixCls, isFormList, isIconList} = this.props;
    let wrapCls = prefixCls + '-list ' + prefixCls + '-list-flat ' + prefixCls + '-list-chip ';
    if(isFormList) {
      wrapCls = wrapCls + prefixCls + '-list-form ';
    }
    if(isIconList) {
      wrapCls = wrapCls + prefixCls + '-list-iconlist ';
    }
    return (
      <div className={wrapCls} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListWarp;
