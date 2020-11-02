import * as React from 'react'
import classnames from 'classnames'
import Checkbox from '../Checkbox'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import { TermsPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Terms'

const prefixCls = 'amd-terms'
export const Terms: React.FC<TermsPropsType> = ({
  className,
  term,
  hasChecked,
  describe,
  children,
  ...rest
}) => {
  useTracker(Terms.displayName)

  const node = (
    <div
      className={classnames(`${prefixCls}-term`, {
        [`${prefixCls}-term-desc`]: describe,
      })}
    >
      {hasChecked ? <Checkbox {...rest} /> : null}
      {term}
    </div>
  )

  return (
    <div {...getDataAttr(rest)} className={classnames(prefixCls, className)}>
      {describe ? null : node}
      <div className={`${prefixCls}-content`}>{children}</div>
      {describe ? node : null}
    </div>
  )
}

Terms.displayName = 'Terms'

Terms.defaultProps = {
  hasChecked: false,
  describe: false,
}

export default withError(Terms)
