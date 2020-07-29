import * as React from 'react'
import classnames from 'classnames'
import Swipeout from 'rc-swipeout'
import { SwipeActionPropsType } from './PropsType'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'

import '@ant-design/mobile-styles/lib/SwipeAction'

const Swipe: any = Swipeout

function fixedButton(btns: SwipeActionPropsType['left']) {
  return btns!.map(item => {
    return {
      ...item,
      className: classnames(
        item.className,
        `${prefixCls}-btn-type-${item.type || 'default'}`,
      ),
    }
  })
}

const prefixCls = 'amd-swipe'
export const SwipeAction: React.FC<SwipeActionPropsType> = props => {
  const {
    className,
    left = [],
    right = [],
    autoClose,
    disabled,
    onOpen,
    onClose,
    children,
  } = props

  useTracker(SwipeAction.displayName)

  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    onOpen?.()
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const wrapClass = classnames(className, `${prefixCls}-container`, {
    [`${prefixCls}-open`]: isOpen,
  })

  return left.length || right.length ? (
    <div {...getDataAttr(props)} className={wrapClass}>
      <Swipe
        prefixCls={prefixCls}
        left={fixedButton(left)}
        right={fixedButton(right)}
        autoClose={autoClose}
        disabled={disabled}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {children}
      </Swipe>
    </div>
  ) : (
    <div {...getDataAttr(props)} className={wrapClass}>
      {children}
    </div>
  )
}

SwipeAction.displayName = 'SwipeAction'

export default withError(SwipeAction)
