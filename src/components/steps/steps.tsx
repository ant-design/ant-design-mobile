import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import type { StepProps } from './step'

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

export const Steps: FC<StepsProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { direction, current } = mergedProps
  const classString = classNames(classPrefix, `${classPrefix}-${direction}`)

  return withNativeProps(
    mergedProps,
    <div className={classString}>
      {React.Children.map(mergedProps.children, (child, index) => {
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
