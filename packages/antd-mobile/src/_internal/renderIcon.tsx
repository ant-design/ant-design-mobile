import * as React from 'react'
import classnames from 'classnames'

import { IconType } from './IconType'
import isReactComponent from './isReactComponent'
import warning from './warning'

const renderIcon = (
  Icon: IconType,
  { size = 'sm', nodeClassName = '', iconClassName = '' } = {},
) => {
  if (!Icon) {
    return null
  }

  // 1.0 ReactNode as <img />
  if (Icon && React.isValidElement(Icon)) {
    const cls = classnames('amd-icon', `amd-icon-${size}`, nodeClassName)
    return React.cloneElement(Icon, { className: cls })
  }

  // 2.0 Component as Alipay
  if (isReactComponent(Icon)) {
    // @ts-ignore
    return <Icon className={iconClassName} size={size} />
  }

  warning(false, '__internal', 'error icon type')
  return null
}

export default renderIcon
