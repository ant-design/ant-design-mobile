import classnames from 'classnames'
import * as React from 'react'
import { TouchFeedback } from '../rmc'
import Badge from '../Badge'
import { renderIcon } from '../_internal'

import { PopoverItemProps } from './PropsType'

const prefixCls = 'amd-popover'
const Item: React.FC<PopoverItemProps> = props => {
  const {
    className,
    icon,
    disabled,
    firstItem,
    children,
    badge,
    onPress,
  } = props

  const cls = classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled,
  })

  let activeClass = `${prefixCls}-item-active `

  if (firstItem) {
    activeClass += `${prefixCls}-item-fix-active-arrow`
  }

  return (
    <TouchFeedback
      onPress={onPress}
      disabled={disabled}
      activeClassName={activeClass}
    >
      <div className={cls}>
        <div className={`${prefixCls}-item-container`}>
          {icon ? (
            <span className={`${prefixCls}-item-icon`} aria-hidden="true">
              {renderIcon(icon)}
            </span>
          ) : null}
          <span className={`${prefixCls}-item-content`}>{children}</span>
          {badge ? (
            <span className={`${prefixCls}-item-badge`}>
              <Badge {...badge} />
            </span>
          ) : null}
        </div>
      </div>
    </TouchFeedback>
  )
}

Item.defaultProps = {
  disabled: false,
}

Item.displayName = 'PopoverItem'

export default Item
