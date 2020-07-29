import * as React from 'react'
// @ts-ignore
import RcCollapse from 'rc-collapse'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import { CollapsePropsType, CollapsePanelPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Collapse'

const RcPanel = RcCollapse.Panel

export const Panel: React.FC<CollapsePanelPropsType> = props => {
  return <RcPanel {...props} />
}

export const Collapse: React.FC<CollapsePropsType> & {
  Panel: typeof Panel
} = props => {
  useTracker(Collapse.displayName)

  return <RcCollapse {...props} prefixCls="amd-collapse" />
}

Collapse.displayName = 'Collapse'

Collapse.Panel = Panel

export default withError(Collapse)
