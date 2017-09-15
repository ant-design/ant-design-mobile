import React from 'react';
import Tooltip from 'rc-tooltip';
import Item from './Item';
import tsPropsType from './PropsType';

export interface PopOverPropsType extends tsPropsType {
  prefixCls?: string;
}

function recursiveCloneChildren(children, cb = (ch: any, _i: number) => ch) {
  return React.Children.map(children, (child, index) => {
    const newChild = cb(child, index);
    if (newChild && newChild.props && newChild.props.children) {
      return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
    }
    return newChild;
  });
}

export default class Popover extends React.Component<PopOverPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    placement: 'bottomRight',
    align: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
  };
  static Item = Item;

  render() {
    const { overlay, onSelect = () => { }, ...restProps } = this.props;

    const overlayNode = recursiveCloneChildren(overlay, (child, index) => {
      const extraProps: any = { firstItem: false };
      if (child && child.type && child.type.myName === 'PopoverItem' && !child.props.disabled) {
        extraProps.onClick = () => onSelect(child, index);
        extraProps.firstItem = (index === 0);
        return React.cloneElement(child, extraProps);
      }
      return child;
    });
    return <Tooltip {...restProps} overlay={overlayNode} />;
  }
}
