/* eslint no-console:0 */
import React, { PropTypes } from 'react';
import Tooltip from 'rc-tooltip';
import Item from './item';

function recursiveCloneChildren(children, cb = ch => ch) {
  return React.Children.map(children, child => {
    const newChild = cb(child);
    if (newChild && newChild.props && newChild.props.children) {
      return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
    }
    return newChild;
  });
}

export default class FloatMenu extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    placement: PropTypes.string,
    popupAlign: PropTypes.object,
    trigger: PropTypes.array,
    onSelect: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-floatmenu',
    placement: 'bottomRight',
    popupAlign: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
    onSelect: () => {},
  }

  render() {
    let { children, prefixCls, placement, trigger, overlay, onSelect, popupAlign, ...other } = this.props;

    const newChildren = recursiveCloneChildren(overlay, (child) => {
      const extraProps = {};
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
      {...other}
    >
      {children}
    </Tooltip>);
  }
}
FloatMenu.Item = Item;
