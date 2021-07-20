import React, {memo} from 'react'
import classNames from 'classnames'
import {withDefaultProps} from '../../utils/with-default-props'

const classPrefix = `am-loading`

const colorRecord: Record<string, string> = {
  default: 'var(--color-weak)',
  primary: 'var(--color-primary)',
  white: 'var(--color-white)',
}

export interface LoadingProps {
  size?: 'mini' | 'small' | 'middle' | 'large'
  color?: 'default' | 'primary' | 'white' | string
}

const defaultProps = {
  size: 'middle',
  color: 'default',
}

const Loading = withDefaultProps(defaultProps)<LoadingProps>(props => {
  const style: any = {
    '--color': colorRecord[props.color] ?? props.color,
  }
  return (
    <div
      style={style}
      className={classNames(classPrefix, `${classPrefix}-${props.size}`)}
    >
      <div className={`${classPrefix}-dot`} />
      <div className={`${classPrefix}-dot`} />
      <div className={`${classPrefix}-dot`} />
    </div>
  )
})

export default memo(Loading)
