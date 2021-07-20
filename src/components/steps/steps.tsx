import React from 'react'
import classNames from 'classnames'
import {CheckCircleFilled, CloseCircleFilled} from '@ant-design/icons'
import Step, {StepProps} from './step'
import {withDefaultProps} from '../../utils/with-default-props'
import {attachPropertiesToComponent} from '../../utils/attach-properties-to-component'

const classPrefix = `am-steps`
const stepClassPrefix = `am-step`

const defaultIconMap = {
  error: <CloseCircleFilled />,
  finish: <CheckCircleFilled />,
  process: <span className={`${stepClassPrefix}-item-icon-process`} />,
  wait: <span className={`${stepClassPrefix}-item-icon-wait`} />,
}

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
  const {direction, current} = props
  const classString = classNames(`${classPrefix}-${direction}`)

  return (
    <div className={classString}>
      {React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child
        }
        const props = child.props as StepProps
        let status = props.status || 'wait'
        let icon = props.icon

        // 小于当前步骤的默认状态是进行中，大于当前步骤的是表示未完成。
        if (index < current) {
          status = props.status || 'finish'
        } else if (index === current) {
          status = props.status || 'process'
        }

        if (direction === 'vertical') {
          icon = icon || defaultIconMap[status]
        }

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
