import * as React from 'react';
import Tooltip from 'rmc-tooltip';
import Item from './Item';
import { PopoverPropsType } from './PropsType';

export interface PopOverPropsType extends PopoverPropsType {
  prefixCls?: string;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  placement?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  mask?: boolean;
}

function recursiveCloneChildren(
  children: any,
  cb = (ch: React.ReactChild, _: number) => ch,
): React.ReactChild[] {
  return React.Children.map(children, (child, index) => {
    const newChild = cb(child, index);
    if (
      typeof newChild !== 'string' &&
      typeof newChild !== 'number' &&
      newChild &&
      newChild.props &&
      newChild.props.children
    ) {
      return React.cloneElement(
        newChild,
        {},
        recursiveCloneChildren(newChild.props.children, cb),
      );
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
    const { overlay, onSelect = () => {}, ...restProps } = this.props;

    const overlayNode = recursiveCloneChildren(overlay, (child, index) => {
      const extraProps: any = { firstItem: false };
      if (
        child &&
        typeof child !== 'string' &&
        typeof child !== 'number' &&
        child.type &&
        // Fixme: not sure where the `myName` came from.
        (child.type as any).myName === 'PopoverItem' &&
        !child.props.disabled
      ) {
        extraProps.onClick = () => onSelect(child, index);
        extraProps.firstItem = index === 0;
        return React.cloneElement(child, extraProps);
      }
      return child;
    });
    const wrapperNode = (
      <div className={`${this.props.prefixCls}-inner-wrapper`}>
        {overlayNode}
      </div>
    );
    return <Tooltip {...restProps} overlay={wrapperNode} />;
  }
}
