import React from 'react';
import Tooltip from 'rc-tooltip';
import Item from './item.web';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

function recursiveCloneChildren(children, cb = (ch, i) => ch) {
  return React.Children.map(children, (child, index) => {
    const newChild = cb(child, index);
    if (newChild && newChild.props && newChild.props.children) {
      return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
    }
    return newChild;
  });
}

export default class Popover extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    placement: 'bottomRight',
    popupAlign: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
    onSelect: () => {},
  };

  static Item = Item;

  render() {
    let[{ children, prefixCls, placement, trigger, overlay, onSelect, popupAlign }, restProps] = splitObject(this.props,
      ['children', 'prefixCls', 'placement', 'trigger', 'overlay', 'onSelect', 'popupAlign']);

    const newChildren = recursiveCloneChildren(overlay, (child, index) => {
      const extraProps = {
        firstItem: null,
        onClick: () => {},
      };
      if (child && child.type && child.type.myName === 'PopoverItem' && !child.props.disabled) {
        extraProps.onClick = () => {
          onSelect(child);
        };
        extraProps.firstItem = index === 0;
        return React.cloneElement(child, extraProps);
      }
      return child;
    });
    return (<Tooltip
      prefixCls={prefixCls}
      placement={placement}
      trigger={trigger}
      overlay={newChildren}
      popupAlign={popupAlign}
      {...restProps}
    >
      {children}
    </Tooltip>);
  }
}
