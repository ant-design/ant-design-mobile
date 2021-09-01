import './page-indicator.less'
import React, { memo, ReactElement } from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'

type PageIndicatorProps = {
  total: number
  current: number
} & ElementProps

export const PageIndicator = memo<PageIndicatorProps>(props => {
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

  return (
    <div
      className={classNames('adm-page-indicator', props.className)}
      style={props.style}
    >
      {dots}
    </div>
  )
})
