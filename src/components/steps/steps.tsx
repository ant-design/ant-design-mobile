import React from 'react'
import classNames from 'classnames'
import Step, { StepProps } from './step'
import { withDefaultProps } from '../../utils/with-default-props'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

const classPrefix = `am-steps`
const stepClassPrefix = `am-step`

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

const Steps = withDefaultProps(defaultProps)<StepsProps>(props => {
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

export default attachPropertiesToComponent(Steps, {
  Step,
})
