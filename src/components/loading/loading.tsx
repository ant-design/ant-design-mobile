import React, { memo } from 'react'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-loading`

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export interface LoadingProps {
  size?: 'mini' | 'small' | 'middle' | 'large'
  color?: 'default' | 'primary' | 'white' | string
}

const defaultProps = {
  size: 'middle',
  color: 'default',
}

export const Loading = memo<LoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  return (
    <div
      style={{
        color: colorRecord[props.color] ?? props.color,
      }}
      className={classNames(classPrefix, `${classPrefix}-${props.size}`)}
    >
      <svg
        height='1em'
        viewBox='0 20 100 40'
        style={{ verticalAlign: '-0.125em' }}
      >
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-100.000000, -71.000000)'>
            <g transform='translate(95.000000, 71.000000)'>
              <g transform='translate(5.000000, 0.000000)'>
                <rect
                  fill='currentColor'
                  x='20'
                  y='36'
                  width='8'
                  height='8'
                  rx='2'
                />
                <rect
                  fill='currentColor'
                  x='46'
                  y='36'
                  width='8'
                  height='8'
                  rx='2'
                />
                <rect
                  fill='currentColor'
                  x='72'
                  y='36'
                  width='8'
                  height='8'
                  rx='2'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
})
