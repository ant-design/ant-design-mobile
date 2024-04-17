import { animated, useSpring } from '@react-spring/web'
import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useMotionReduced } from '../../utils/reduce-and-restore-motion'
import { mergeProps } from '../../utils/with-default-props'

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

export const SpinLoading = memo<SpinLoadingProps>(props => {
  const mergedProps = mergeProps(defaultProps, props)
  const motionReduced = useMotionReduced()
  const { percent } = useSpring({
    cancel: motionReduced,
    loop: {
      reverse: true,
    },
    from: {
      percent: 80,
    },
    to: {
      percent: 30,
    },
    config: {
      duration: 1200,
    },
  })

  return withNativeProps(
    mergedProps,
    <animated.div
      className={classPrefix}
      style={
        {
          '--color': colorRecord[mergedProps.color] ?? mergedProps.color,
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
