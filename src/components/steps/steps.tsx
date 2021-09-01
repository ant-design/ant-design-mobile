import React from 'react'
import classNames from 'classnames'
import { StepProps } from './step'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-steps`
const stepClassPrefix = `adm-step`

const defaultIcon = <span className={`${stepClassPrefix}-icon-dot`} />

type Direction = 'horizontal' | 'vertical'

export interface StepsProps {
  current?: number
  direction?: Direction
}

const defaultProps = {
  current: 0,
  direction: 'horizontal',
}

export const Steps = withDefaultProps(defaultProps)<StepsProps>(props => {
  const { direction, current } = props
  const classString = classNames(classPrefix, `${classPrefix}-${direction}`)

  return (
    <div className={classString}>
      {React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child
        }
        const props = child.props as StepProps
        let status = props.status || 'wait'

        if (index < current) {
          status = props.status || 'finish'
        } else if (index === current) {
          status = props.status || 'process'
        }

        const icon = props.icon ?? defaultIcon

        return React.cloneElement(child, {
          status,
          icon,
        })
      })}
    </div>
  )
})
