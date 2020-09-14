import * as React from 'react'
import classnames from 'classnames'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import Container from '../Container'
import { ErrorBlockPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/ErrorBlock'

const prefixCls = 'amd-error-block'

export const ErrorBlock: React.FC<ErrorBlockPropsType> = ({
  title,
  error,
  children,
  ...rest
}) => {
  const wrapperClassName: string = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-title`]: !!title,
  })

  useTracker(ErrorBlock.displayName)

  const errorNode = (
    <div {...getDataAttr(rest)} className={wrapperClassName}>
      <img className={`${prefixCls}-poster`} src={error.src} />
      <div className={`${prefixCls}-text`}>{error.text}</div>
      {children && <div className={`${prefixCls}-content`}>{children}</div>}
    </div>
  )

  if (title) {
    return <Container title={title}>{errorNode}</Container>
  }

  return errorNode
}

ErrorBlock.displayName = 'ErrorBlock'

export default withError(ErrorBlock)
