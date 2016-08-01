/* eslint no-console:0 */
import * as React from 'react';
import { PropTypes } from 'react';
import Tooltip from 'rc-tooltip';
import Item from './item';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

function recursiveCloneChildren(children, cb = ch => ch) {
  return React.Children.map(children, child => {
    const newChild = cb(child);
    if (newChild && newChild.props && newChild.props.children) {
      return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
    }
    return newChild;
  });
}

export default class FloatMenu extends React.Component<tsPropsType, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    placement: PropTypes.string,
    popupAlign: PropTypes.object,
    trigger: PropTypes.array,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-float-menu',
    placement: 'bottomRight',
    popupAlign: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
    onSelect: () => {},
  };

  static Item = Item;

  render() {
    let[{ children, prefixCls, placement, trigger, overlay, onSelect, popupAlign }, restProps] = splitObject(this.props,
      ['children', 'prefixCls', 'placement', 'trigger', 'overlay', 'onSelect', 'popupAlign']);

    const newChildren = recursiveCloneChildren(overlay, (child) => {
      const extraProps = {
        onClick: () => {},
      };
      if (child && child.type && child.type.FloatMenuItem && !child.props.disabled) {
        extraProps.onClick = () => {
          onSelect(child);
        };
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
