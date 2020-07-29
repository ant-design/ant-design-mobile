import * as React from 'react'
import Tooltip from 'rmc-tooltip'
import Item from './Item'
import { PopoverPropsType } from './PropsType'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import '@ant-design/mobile-styles/lib/Popover'

function recursiveCloneChildren(
  children: any,
  cb = (ch: React.ReactChild, _: number) => ch,
): React.ReactChild[] {
  return React.Children.map(children, (child, index) => {
    const newChild = cb(child, index)
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
      )
    }
    return newChild
  })
}

const prefixCls = 'amd-popover'

export const Popover: React.FC<PopoverPropsType> & {
  Item: typeof Item
} = ({ overlay, onSelect = () => {}, ...restProps }) => {
  useTracker(Popover.displayName)

  const overlayNode = recursiveCloneChildren(overlay, (child, index) => {
    const extraProps: any = { firstItem: false }
    if (
      child &&
      typeof child !== 'string' &&
      typeof child !== 'number' &&
      child.type &&
      // Fixme: not sure where the `myName` came from.
      (child.type as any).displayName === 'PopoverItem' &&
      !child.props.disabled
    ) {
      extraProps.onPress = () => onSelect(child, index)
      extraProps.firstItem = index === 0
      return React.cloneElement(child, extraProps)
    }
    return child
  })

  const wrapperNode = (
    <div className={`${prefixCls}-inner-wrapper`}>{overlayNode}</div>
  )

  return <Tooltip prefixCls={prefixCls} overlay={wrapperNode} {...restProps} />
}

Popover.Item = Item

Popover.displayName = 'Popover'

Popover.defaultProps = {
  placement: 'bottomRight',
  align: { overflow: { adjustY: 0, adjustX: 0 } },
}

export default withError(Popover)
