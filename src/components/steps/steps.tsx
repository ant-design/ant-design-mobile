import React, { FC } from 'react'
import classNames from 'classnames'
import { StepProps } from './step'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-steps`
const stepClassPrefix = `adm-step`

const defaultIcon = <span className={`${stepClassPrefix}-icon-dot`} />

type Direction = 'horizontal' | 'vertical'

export type StepsProps = {
  current?: number
  direction?: Direction
  size?: 'small' | 'large'
} & NativeProps

const defaultProps = {
  current: 0,
  direction: 'horizontal',
  size: 'small',
}

export const Steps: FC<StepsProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { direction, current } = props
  const classString = classNames(
    classPrefix,
    `${classPrefix}-${direction}`,
    `${classPrefix}-size-${props.size}`
  )

  return withNativeProps(
    props,
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
}
