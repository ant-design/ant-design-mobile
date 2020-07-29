import * as React from 'react'
import classnames from 'classnames'
import { getDataAttr, renderIcon } from '../_internal'
import { TagPropsType } from './PropsType'
import { Touchable, withError } from '../rmc'
import { useTracker } from '../hooks'
import '@ant-design/mobile-styles/lib/Tag'

const prefixCls = 'amd-tag'
export const Tag: React.FC<TagPropsType> = props => {
  const {
    className,
    theme = 'normal',
    type = 'filling',
    component,
    onPress,
    children,
    size,
  } = props || {}
  useTracker(Tag.displayName)
  const dataProps = getDataAttr(props)
  const classList = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-${type}-${theme}`]: true,
    [`${className}`]: !!className,
  })

  const icon = type === 'icon' && renderIcon(component)
  const iconCls = classnames({
    [`${prefixCls}-icon-area`]: true,
  })
  return (
    <Touchable onPress={onPress}>
      <span className={classList} {...dataProps}>
        {icon ? <div className={iconCls}>{icon}</div> : null}
        {children}
      </span>
    </Touchable>
  )
}

Tag.displayName = 'Tag'

export default withError(Tag)
