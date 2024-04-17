import classNames from 'classnames'
import type { ReactElement } from 'react'
import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-page-indicator`

export type PageIndicatorProps = {
  total: number
  current: number
  direction?: 'horizontal' | 'vertical'
  color?: 'primary' | 'white'
} & NativeProps<
  | '--dot-color'
  | '--active-dot-color'
  | '--dot-size'
  | '--active-dot-size'
  | '--dot-border-radius'
  | '--active-dot-border-radius'
  | '--dot-spacing'
>

const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
}

export const PageIndicator = memo<PageIndicatorProps>(props => {
  const mergedProps = mergeProps(defaultProps, props)

  const dots: ReactElement[] = []
  for (let i = 0; i < mergedProps.total; i++) {
    dots.push(
      <div
        key={i}
        className={classNames(`${classPrefix}-dot`, {
          [`${classPrefix}-dot-active`]: mergedProps.current === i,
        })}
      />
    )
  }

  return withNativeProps(
    mergedProps,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${mergedProps.direction}`,
        `${classPrefix}-color-${mergedProps.color}`
      )}
    >
      {dots}
    </div>
  )
})
