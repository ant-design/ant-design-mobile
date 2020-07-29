import * as React from 'react'
import classnames from 'classnames'
import Checkbox from '../Checkbox'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import { TermsPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Terms'

export const Terms: React.FC<TermsPropsType> = ({
  term,
  checked,
  describe = false,
  onChange,
  children,
  ...rest
}) => {
  useTracker(Terms.displayName)

  const node = (
    <div
      className={classnames('amd-term', {
        'amd-term-desc': describe,
      })}
    >
      {typeof checked === 'boolean' ? (
        <Checkbox onChange={onChange} defaultChecked={checked} />
      ) : null}
      <label>{term}</label>
    </div>
  )

  return (
    <div {...getDataAttr(rest)} className="amd-terms">
      {describe ? null : node}
      <div className="amd-terms-content">{children}</div>
      {describe ? node : null}
    </div>
  )
}

Terms.displayName = 'Terms'

export default withError(Terms)
