import React, { memo, ReactElement } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

export type PageIndicatorProps = {
  total: number
  current: number
  color?: 'primary' | 'white'
  children?: []
} & NativeProps<'--active-color' | '--non-active-color'>

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
        className={classNames('adm-page-indicator-dot', {
          'adm-page-indicator-dot-active': props.current === i,
        })}
      />
    )
  }

  return withNativeProps(
    props,
    <div
      className={classNames(
        'adm-page-indicator',
        `adm-page-indicator-color-${props.color}`
      )}
    >
      {dots}
    </div>
  )
})
