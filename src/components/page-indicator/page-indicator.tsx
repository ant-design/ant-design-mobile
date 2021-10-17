import React, { memo, ReactElement } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-page-indicator`

export type PageIndicatorProps = {
  total: number
  current: number
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
}

export const PageIndicator = memo<PageIndicatorProps>(p => {
  const props = mergeProps(defaultProps, p)

  const dots: ReactElement[] = []
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <div
        key={i}
        className={classNames(`${classPrefix}-dot`, {
          [`${classPrefix}-dot-active`]: props.current === i,
        })}
      />
    )
  }

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, `${classPrefix}-color-${props.color}`)}
    >
      {dots}
    </div>
  )
})
