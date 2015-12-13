import React, {PropTypes} from 'react';
function noop() {}

const ListWarp = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    isFormList: PropTypes.bool,
    isIconList: PropTypes.bool,
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      isFormList: true,
      isIconList: false,
      didMount: noop
    };
  },
  componentDidMount() {
    this.props.didMount(this);
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
