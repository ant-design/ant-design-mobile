import React, { PropTypes } from 'react';
import RcCollapse from 'rc-collapse';

export default class Collapse extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    openAnimation: PropTypes.object,
    onChange: PropTypes.func,
    accordion: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-collapse',
    onChange() {},
    accordion: false,
  };

  customPanelContent = (el, idx = -1) => {
    let { prefixCls } = this.props;
    let result = null;

    if (Array.isArray(el.props.children)) {
      let tempChldren = [];
      const subTempLen = el.props.children.length;
      el.props.children.forEach((subEl, subIdx) => {
        let itemCls = null;
        if (subIdx === subTempLen - 1) {
          itemCls = `${prefixCls}-content-box-item ${prefixCls}-content-box-item-last`;
        } else {
          itemCls = `${prefixCls}-content-box-item`;
        }
        tempChldren.push(<div className={itemCls} key={`${subIdx}-sub-item`}>{subEl}</div>);
      });
      result = React.cloneElement(el, {
        children: tempChldren,
        key: idx
      });
    } else if (typeof el.props.children === 'string' || typeof el.props.children === 'number') {
      result = React.cloneElement(el, {
        children: <div className={`${prefixCls}-content-box-item ${prefixCls}-content-box-item-last`}>{el.props.children}</div>,
        key: idx
      });
    } else {
      result = el;
    }
    return result;
  };

  render() {
    let { prefixCls, children } = this.props;

    let customChildren = [];

    if (Array.isArray(children)) {
      children.forEach((el, idx) => {
        customChildren.push(this.customPanelContent(el, idx));
      });
    } else {
      customChildren = this.customPanelContent(children);
    }

    return (
      <RcCollapse
        prefixCls={prefixCls}
        {...this.props}
      >
        {customChildren}
      </RcCollapse>
    );
  }
}
