import * as React from 'react'
import classnames from 'classnames'
import { useTracker } from '../hooks'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import Item from './Item'
import { ListPropsType } from './PropsType'
import '@ant-design/mobile-styles/lib/List'

const prefixCls = 'amd-list'

export const List: React.FC<ListPropsType> & {
  Item: typeof Item
} = props => {
  const { children, className, renderHeader, renderFooter, radius } = props
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-radius`]: !!radius,
  })

  useTracker(List.displayName)

  return (
    <div {...getDataAttr(props)} className={wrapCls}>
      {renderHeader ? (
        <div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>
      ) : null}
      {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
      {renderFooter ? (
        <div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>
      ) : null}
    </div>
  )
}

List.displayName = 'List'
List.Item = Item

export default withError(List)
