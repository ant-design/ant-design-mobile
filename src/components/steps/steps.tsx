import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import type { StepProps } from './step'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-steps`
const stepClassPrefix = `adm-step`

const defaultIcon = <span className={`${stepClassPrefix}-icon-dot`} />

type Direction = 'horizontal' | 'vertical'

export type StepsProps = {
  current?: number
  direction?: Direction
  children?: ReactNode
} & NativeProps<
  | '--title-font-size'
  | '--description-font-size'
  | '--indicator-margin-right'
  | '--icon-size'
>

const defaultProps = {
  current: 0,
  direction: 'horizontal',
}

export const Steps: FC<StepsProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { direction, current } = props
  const classString = classNames(classPrefix, `${classPrefix}-${direction}`)

  return withNativeProps(
    props,
    <div className={classString}>
      {React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement<StepProps>(child)) {
          return child
        }
        const childProps = child.props
        let status = childProps.status || 'wait'

        if (index < current) {
          status = childProps.status || 'finish'
        } else if (index === current) {
          status = childProps.status || 'process'
        }

        const icon = childProps.icon ?? defaultIcon

        return React.cloneElement(child, {
          status,
          icon,
        })
      })}
    </div>
  )
}
