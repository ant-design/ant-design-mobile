import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useSpring, animated } from '@react-spring/web'

const classPrefix = 'adm-spin-loading'

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export type SpinLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
} & NativeProps<'--color' | '--size'>

const defaultProps = {
  color: 'default',
}

const circumference = 15 * 3.14159265358979 * 2

export const SpinLoading = memo<SpinLoadingProps>(p => {
  const props = mergeProps(defaultProps, p)

  const { percent } = useSpring({
    loop: {
      reverse: true,
    },
    from: {
      percent: 30,
    },
    to: {
      percent: 80,
    },
    config: {
      duration: 1200,
    },
  })

  return withNativeProps(
    props,
    <animated.div
      className={classPrefix}
      style={
        {
          '--color': colorRecord[props.color] ?? props.color,
          '--percent': percent,
        } as any
      }
    >
      <svg className={`${classPrefix}-svg`} viewBox='0 0 32 32'>
        <animated.circle
          className={`${classPrefix}-fill`}
          fill='transparent'
          strokeWidth='2'
          strokeDasharray={circumference}
          strokeDashoffset={percent}
          strokeLinecap='square'
          r={15}
          cx={16}
          cy={16}
        />
      </svg>
    </animated.div>
  )
})
