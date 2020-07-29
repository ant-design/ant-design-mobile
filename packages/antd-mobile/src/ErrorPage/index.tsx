import * as React from 'react'
import classnames from 'classnames'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import { ErrorPagePropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/ErrorPage'

export const ErrorPage: React.FC<ErrorPagePropsType> = ({
  src,
  text,
  subText,
  children,
  ...rest
}) => {
  const wrapperClassName: string = classnames({
    'amd-error-page': true,
  })

  useTracker(ErrorPage.displayName)

  return (
    <div {...getDataAttr(rest)} className={wrapperClassName}>
      <img className="amd-error-page-poster" src={src} />
      <div className="amd-error-page-text">{text}</div>
      <div className="amd-error-page-sub-text">{subText}</div>
      <div className="amd-error-page-content">{children}</div>
    </div>
  )
}

ErrorPage.displayName = 'ErrorPage'

export default withError(ErrorPage)
