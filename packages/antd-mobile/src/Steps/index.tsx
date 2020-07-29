import * as React from 'react'
import classnames from 'classnames'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import StepContext from './StepContext'
import Step from './Step'
import { StepsPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Steps'

export const Steps: React.FC<StepsPropsType> & {
  Step: typeof Step
} = ({ current = 0, direction = 'vertical', children }) => {
  useTracker(Steps.displayName)

  const cls = classnames('amd-steps', {
    vertical: direction === 'vertical',
    horizontal: direction === 'horizontal',
  })

  // flattern the array at first https://github.com/ant-design/ant-design-mobile/issues/934
  const filterChildren: any[] = []
  if (children && children.length) {
    children.forEach((item: any) => {
      if (React.isValidElement(item)) {
        filterChildren.push(item)
      }
    })
  }

  const newChildren = React.Children.map(filterChildren, (item: any, index) => {
    return React.cloneElement(item, {
      index,
    })
  })

  return (
    <StepContext.Provider
      value={{ current, direction, length: filterChildren.length }}
    >
      <div className={cls}>{newChildren}</div>
    </StepContext.Provider>
  )
}

Steps.Step = Step

Steps.displayName = 'Steps'

export default withError(Steps)
