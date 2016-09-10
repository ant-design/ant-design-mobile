import * as React from 'react';
import { PropTypes } from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import Cascader from 'rmc-cascader/lib/Cascader';
import treeFilter from 'array-tree-filter';
import tsPropsType from './PropsType';

function getDefaultProps() {
  const defaultFormat = (values) => {
    return values.join(',');
  };
  return {
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    format: defaultFormat,
    style: {left: 0, bottom: 0},
    cols: 3,
    value: [],
    extra: '请选择',
    okText: '确定',
    dismissText: '取消',
    title: '',
  };
}

export default class Picker extends React.Component<tsPropsType, any> {
  static propTypes = {
    format: PropTypes.func,
  };

  static defaultProps = getDefaultProps();

  getSel = () => {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    });
    return this.props.format(treeChildren.map((v) => {
      return v.label;
    }));
  };

  render() {
    const {props} = this;
    const {children, value, okText, dismissText, title, extra, popupPrefixCls} = props;
    const extraProps = {
      extra: this.getSel() || extra,
    };
    const childEl = React.cloneElement(children, children.type && children.type.name === 'ListItem' ? extraProps : {});
    const cascader = (
      <Cascader
        prefixCls={props.prefixCls}
        pickerPrefixCls={props.pickerPrefixCls}
        data={props.data}
        cols={props.cols}
      />
    );
    return (
      <PopupCascader
        cascader={cascader}
        WrapComponent="div"
        transitionName="am-slide-up"
        maskTransitionName="am-fade"
        {...this.props}
        prefixCls={popupPrefixCls}
        value={value}
        title={title}
        dismissText={<span className={`${popupPrefixCls}-header-cancel-button`}>{dismissText}</span>}
        okText={<span className={`${popupPrefixCls}-header-ok-button`}>{okText}</span>}
      >
        {childEl}
      </PopupCascader>
    );
  }
}
