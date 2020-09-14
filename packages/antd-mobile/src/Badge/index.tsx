import classnames from 'classnames'
import * as React from 'react'
import { BadgePropsType } from './PropsType'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import '@ant-design/mobile-styles/lib/Badge'

export const Badge: React.FC<BadgePropsType> = props => {
  useTracker(Badge.displayName)

  let {
    bubble,
    className,
    overflowCount,
    text,
    dot,
    placement,
    children,
    stroke,
  } = props

  overflowCount = overflowCount as number

  text =
    typeof text === 'number' && text > overflowCount
      ? `${overflowCount}+`
      : text

  if (dot) {
    text = ''
  }

  const prefixCls = 'amd-badge'

  const strokeCls = classnames({
    [`${prefixCls}-stroke`]: stroke,
  })

  const scrollNumberCls = classnames(
    {
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-text`]: !dot,
    },
    strokeCls,
  )

  const bubbleCls = classnames(
    {
      [`${prefixCls}-bubble`]: true,
      [`${prefixCls}-bubble-${placement}`]: true,
    },
    strokeCls,
  )

  const badgeCls = classnames(prefixCls, className, {
    [`${prefixCls}-not-a-wrapper`]: !children,
  })

  return (
    <span className={badgeCls}>
      {children}
      {bubble ? (
        <span className={bubbleCls}>
          <span className={`${prefixCls}-bubble-text`}>{text}</span>
          {placement === 'middle' ? (
            <strong
              className={classnames(
                `${prefixCls}-bubble-triangle`,
                `${prefixCls}-bubble-middle-triangle`,
              )}
            />
          ) : null}
        </span>
      ) : (
        (text || dot) && (
          <span className={scrollNumberCls}>
            <span>{text}</span>
          </span>
        )
      )}
    </span>
  )
}

Badge.displayName = 'Badge'
Badge.defaultProps = {
  overflowCount: 99,
  dot: false,
  bubble: false,
  placement: 'right',
  stroke: false,
}

export default withError(Badge)
