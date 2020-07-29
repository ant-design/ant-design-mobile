import * as React from 'react'
import RMCPullToRefresh from './dep'
import { useTracker } from '../hooks'
import { withError } from '../rmc'
import { PullToRefreshPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/PullToRefresh'

const PullToRefresh: React.FC<PullToRefreshPropsType> = props => {
  useTracker(PullToRefresh.displayName)

  return <RMCPullToRefresh {...props} />
}

PullToRefresh.displayName = 'PullToRefresh'

export default withError(PullToRefresh)
